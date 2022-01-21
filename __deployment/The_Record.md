Table of Contents
=================

A. Setting up the Pet Project server

B. Adding new pet projects to the server


----------------

### A. Setting up the Pet Project server

  1) Purchase a droplet. Ubuntu 14.04 (or whatever's current in the future)

  2) Add your SSH key to it, and access it with `ssh root@dropletIP`

  3) Create a new user on the server to do deploy stuff.
      Call it `deploy` for convention.
      [More info](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04)

  4) Install Node.js with NVM
      Use a more recent version! 0.30+
      Copy a global version to /usr/local/bin/node
      [More info](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps)

  5) Install nginx
  - Follow the [basic install guide](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-12-04-lts-precise-pangolin)
  - Add a new site to /etc/nginx/sites-available. Examples of the files can be
  found in this repo.
  - Create a symlink in sites-enabled.
  - Remove the symlink to `default` from sites-enabled.
  `sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default`
  - in /etc/nginx/nginx.conf, set the access logs and error logs to
  /home/deploy/nginx.access.log and /home/deploy/nginx.error.log.
  - In /etc/nginx/nginx.conf, set `server_names_hash_bucket_size` to 64.
  Should be commented out, just gotta uncomment it.

  - **TROUBLESHOOTING**: You can use the super helpful `nginx -t` command to see what's going wrong, if nginx can't start.


  6) Add NODE_ENV
      All projects running on the server will need a NODE_ENV variable to be set.
      open up .bashrc in the root directory with nano, and add:
      `export NODE_ENV=production`
      You can see that your info is saved by typing `printenv` in the console.

  7) Ensure PM2 is installed globally for the deploy user

  8) Ensure build-essential is installed.
      `sudo apt-get install build-essential`
      This installs Make and other required tools for NPM and Node.

  9) Make sure we have some swap space!
      This allows Ubuntu to use hard disk space when Node runs out of memory.
      This has happened to me on deploy (Stupid Kerberos!!)
      First, check to see how much swap space is available with `free -m`
      If it's <4000, run these commands:

    A. sudo fallocate -l 4G /swapfile   // Create a 4 gigabyte swapfile
    B. sudo chmod 600 /swapfile         // Restrict access to root
    C. sudo mkswap /swapfile            // Mark the file as a swap space
    D. sudo swapon /swapfile            // Enable the swap

  ##### Helpful Links:
  [General info on node applications](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04)





### B. Adding new pet projects to the server

  1) Set up a reverse proxy with nginx
      Make a file for the new domain (eg. nano /etc/nginx/sites-available/requestkittens.com.conf)
      This tells nginx to forward all traffic received for that domain to
      the port specified.
      Create a symlink in sites-enabled:
      $ sudo ln -s sites-available/aracari.ca sites-enabled/aracari.ca

  2) Get a database plan
      eg. Login to mongolab, create a new mongodb.

  3) Configure DNS for domain
      We need to point the domain to DigitalOcean (3 nameservers,
      ns1-3.digitalocean.com), as well as add the domains to DigitalOcean:
      https://cloud.digitalocean.com/networking#actions-domains
      [More info](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean)

  4) SSH in and create a config file under /home/deploy/config/PROJECT/production.json
      You can then specify this path in your project,
      when process.env.NODE_ENV is production.

  5) While you're there, create a directory under /home/deploy/PROJECT.

  4) Create a flightplan for the project
      [Example](https://github.com/joshwcomeau/words-with-strangers-redux/blob/master/flightplan.js)

  5) Set up an initialize.js file that loads environment variables depending on context.
      Here's how I set it up in Words With Strangers:
      ```
      let ENV_CONFIG = process.env.NODE_ENV === 'production'
      ? '/home/deploy/config/wws/production.json'
      : `./server/config/${process.env.NODE_ENV}.json`;
      ```
      [Full example](https://github.com/joshwcomeau/words-with-strangers-redux/blob/master/server/initialize.js)

  6) Set up logging

  7) Set up HTTPS. Surprisingly straightforward! Follow this guide:
  https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-14-04
  (Differences: use the site in question in /sites-available instead of `default`. See the config in sites-available/aracari.ca for example.)

  OPTIONAL STEPS:
