---
title: 'Jexactyl v4 - A new chapter'
authors: [camwhit-e]
date: '2024-12-31'
tags: ['hello']
---

import ImageCarousel from '@site/src/components/ImageCarousel';

## Introduction
Since 2022, Jexactyl v3 has provided a smooth, hyperfast UI and reliable backend to tens of thousands of users and business owners.
The community has grown and support has increased to make this project a true competitor for other game panel interfaces popular
in the industry, such as Pelican Panel, Pterodactyl and more.

<!-- truncate -->

Now, it's time for an upgrade. Version 4, coming this year, has been rebuilt entirely - not a single line of code copied from
the previous version to ensure even greater stability, performance and practicality. Today, there's some exciting new features
that I'd like to give you some information about.

---

## Feature: All-new Billing
<ImageCarousel
    images={[
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733709567/kpzo6qzfkrgfxynrdhsa.png', text: 'The client-side UI for viewing available packages.' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733709675/npy8k26niqz1a1g6pide.png', text: 'Order page for customers to enter payment details.' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733710102/eez6aekz2tdgxhyarn7g.png', text: 'Admin-side controls for server packages and categories.' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733710369/g6qym2bd4e9drghpohsk.png', text: 'Server billing page - allows users to renew their server.' },
    ]}
/>

Jexactyl v4 includes a brand new, state-of-the-art billing suite using Stripe and PayPal as payment gateways.
This allows businesses to collect payments with ease, and see all details in the Stripe dashboard as well as Jexactyl.
Google Pay, Apple Pay and other payment methods can also be enabled at the touch of a button from the admin UI.

The new billing system is done on a monthly basis, so users must pay their server bill monthly to keep it active.
All payment data is never stored on the panel, and all sensitive information is only dealt with via Stripe for security.

Having this advanced payment system in Jexactyl offers several benefits:
- Users do not have to navigate between multiple different websites to order a product
- Admins only need to configure the site once, instead of managing multiple sites
- Customers will only need one set of login details, which avoids confusion

---

## Feature: Admin Activity Logs
<ImageCarousel
    images={[
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1734750276/Screenshot_2024-12-21_at_03-03-58_Admin_Admin_Activity_z2bjcd.png',
            text: 'Admin actions are logged and displayed in the UI.' },
        {
            url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1734750445/Screenshot_2024-12-21_at_03-07-15_Admin_Admin_Activity_fbloa0.png',
            text: 'All logs include detailed metadata about the action.',
        }
    ]}
/>

Jexactyl v4 includes a new system which logs all activity made by all administrators on the Panel
and displays it via the administrative UI. These logs are created instantly and can't be deleted,
improving security and giving panel owners more control over their administrative users.

All logs contain detailed metadata about the action, including new updates, timestamps and user data.

---

## Feature: Jexactyl AI
<ImageCarousel
    images={[
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1734750574/Screenshot_2024-12-21_at_03-09-22_Admin_Jexactyl_AI_qyecih.png',
            text: 'Administrators can interact with the AI on the admin-side.' },
        {
            url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1734750687/Screenshot_2024-12-21_at_03-11-15_cam_s_server_Console_ev65hi.png',
            text: 'Users can get prompted to ask AI for help when their server crashes.',
        }
    ]}
/>

Another new feature of V4 is Artifical Intelligence integration with Google Gemini.
This allows users to debug their servers without necessarily getting in touch with support,
which can reduce the reliance of administrative support as it provides solutions to users
which they can implement themselves.

---

## Customization: Themes
<ImageCarousel
    images={[
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733710940/vzmupgcf1xnbciibgctl.png', text: 'This page allows admins to modify panel colours instantly.' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733711197/mgzbyamnicklx18ze4sl.png', text: 'An example of a Discord-inspired theme, done in <1 minute.' },
    ]}
/>

Jexactyl v4 expands on v3's design modularity by allowing admins to create their own colour palettes directly in the panel UI,
allowing for instant modifications to the UI without the need to recompile, run commands or edit files.

If you make a mistake, it's no problem - the 'Reset to Defaults' button means your panel can always be restored to default
UI settings in case of any mishaps. It's almost foolproof.

---

## Customization: Links
<ImageCarousel
    images={[
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733711632/jerpc3ejqv3ysq1pykbk.png', text: 'The admin menu for creating, updating and deleting links.' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733711691/oa0y4ufrixutfi48rxfo.png', text: 'A dialog for creating a new link to show to users.' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733711759/yec6co3jdmdzlactq7q2.png', text: 'Links are shown to clients at the bottom of the sidebar.' },
    ]}
/>

Another way to customize your user's experience is by adding helpful links to the panel so that your users can navigate easier.
While it's a simple feature, having a central place for important links improves customer experience. Jexactyl's links system
allows admins to add custom links to the bottom of the user's sidebar when they are on the dashboard, allowing for easier navigation.

---

## Customization: Alerts
<ImageCarousel
    images={[
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733712097/ygrichbo8drazshc72jz.png', text: 'Set custom alert types, text and more via the admin UI.' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733712097/oxw2pva9furtqbw9a4c7.png', text: 'Set the alert to appear in different places on the client-side' },
        { url: 'https://res.cloudinary.com/dfrgw9kfn/image/upload/v1733712097/wimr1wzcofxgjo5tghd4.png', text: 'An example of a central alert, displayed as a dialog.' },
    ]}
/>

Jexactyl v4 includes an Alerts system, which can be enabled to notify users of important information.
The alert can be displayed in multiple different areas of the user's interface, and can be configured
to display different colours and text depending on how severe the information is.

---

## Summary

This list of new features and customization options are just the start of Jexactyl v4's list of new
features that it brings to the dynamic market of server hosting software. If you enjoy using v4 when
it releases, please make sure to give us a star on GitHub or join our Discord for updates and sneak peeks
at what's coming next.
