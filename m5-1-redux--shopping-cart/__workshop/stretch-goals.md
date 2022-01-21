# Stretch Goals

## Stretch Goal 1: Clear cart

Add a new button, "Clear cart", which removes all items from the cart.

The design does not specify where this button should go, so consider this a good opportunity to hone your design instincts as well as your programming skills!

Some considerations:

- It should be placed in a location that is prominent enough to be found without too much hunting, but also not easy to accidentally click (imagine a user spending 10 minutes building up a precise order, only to accidentally throw all that state away!)

- The only button style right now is "primary": it's big and glossy and prominent. The "Clear cart" button should probably be a bit more subdued. Consider adding a "type" prop to the `Button` component. Maybe the button could have a translucent black background, or a transparent background with a subtle border? Consider looking at established design libraries like "Material UI" to see how they manage alternate button styles

## Stretch Goal 2: Sales tax

In a real e-commerce store, users might have to pay sales tax.

Add a `<select>` input to the cart side-panel, and add options for each of the Canadian provinces. Depending on which province is selected, the province's relevant sales tax should be applied to the total price.

For reference, sales taxes by province:

| Province              | Tax     |
| --------------------- | ------- |
| Alberta               | 5%      |
| British Columbia      | 12%     |
| Manitoba              | 12%     |
| New-Bruinswick        | 15%     |
| Newfoundland/Labrador | 15%     |
| Northwest Territories | 5%      |
| Nova Scotia           | 15%     |
| Nunavut               | 5%      |
| Ontario               | 13%     |
| PEI                   | 15%     |
| Quebec                | 14.975% |
| Saskatchewan          | 11%     |
| Yukon                 | 5%      |
