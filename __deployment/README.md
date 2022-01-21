One Ring To Rule Them All
=========================

From now on, all of my side projects will be hosted on the same
DigitalOcean droplet:

  pet-projects
  159.203.41.223
  1GB Ram / 30GB SSD Disk
  Ubuntu 14.04.3 x64
  Toronto 1

The server uses nginx as a reverse proxy, so that any type of app can
be deployed and run on one server. Using PM2 for Node apps.

Username is `deploy`. Can be accessed via:

`$ ssh deploy@159.203.41.223`


ADDING A NEW APP
================

See instructions in The_Record.md



CURRENT PET INDEX
=================

port   | site
-------|-----------------------
3000   | wordswithstrangers.ca
3001   | panther.audio
3002   | aracari.ca
