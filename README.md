## Scroll Top

### Overview

Scroll Top adds an intuitive icon at the bottom-right corner of each page so that with one click you will be at the top of the page. No more dragging of the scroll bar. It will be just fun and ergonomic to use. Scroll Top is an uncomplicated free Open Source Magento Module allowing site visitors to immediately and seamlessly get back to the top of your web page after scrolling a lengthy page.

**Please Note**:- This Module Adds Scroll to Top Button in Magento Store Frontend. Scroll to Top Button Automatically gets activated when you scroll down.

### Features

1. No more dragging scroll bar.
2. Available on all pages of Magento Frontend Store.
3. Open Source - Free.
4. It loads ScrollTop CSS & Js, Only If Enabled from Admin Backend.

### Account & Pricing

This Module (HK2 Scroll Top) is available as Open Source and Free of cost. No Hidden Charges.

## How to install

### Method 1: Install ready-to-paste package

[Download Link - HK2 - ScrollTop - (https://www.techbasant.in/modules/hk2_scrolltop-1.0.0.zip)](https://www.techbasant.in/modules/hk2_scrolltop-1.0.0.zip 'Link')

Download the zip package and unzip it in app/code folder.

## Enable Extension:

```
php bin/magento module:enable HK2_ScrollTop

php bin/magento setup:upgrade

php bin/magento setup:static-content:deploy

php bin/magento cache:clean
```

## Disable Extension:

```
php bin/magento module:disable HK2_ScrollTop

php bin/magentosetup:upgrade

php bin/magento setup:static-content:deploy

php bin/magento cache:clean
```

### Method 2: Install via composer (Recommend)

Run the following command in Magento 2 root folder

```
composer require hk2/scrolltop
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

## Maintenance mode

You may want to enable the maintenance mode when installing or updating the module, especially when working on a production website. To do so, run the two commands below before and after running the other setup commands:

### Enable Maintenance Mode

```
php bin/magento maintenance:enable
```

### Disable Maintenance Mode

```
php bin/magento maintenance:disable
```

Feel Free to send your suggestions of any changes/improvements, will be happy to add the changes.

### Usage - How Does The Extension Work?

Once module is enabled you can see it on all pages. Please check the Screenshots

### Version Support

Magento 2.3.x - 2.4.x

### Support Email

hashtagkitto@gmail.com

### Privacy

This extension does not read, change, store, or transmit any of your personal data (e.g., logins, passwords, messages, contacts) from any of the sites or your computer in absolutely any form.
