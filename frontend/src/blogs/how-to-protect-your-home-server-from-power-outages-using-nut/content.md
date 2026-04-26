---
title: "How to protect your home server from power outages using NUT"
subtitle: "A complete guide to configuring Network UPS Tools (NUT), automating graceful shutdowns, and understanding battery hardware."
date: "April 26, 2026"
tags: ["Home server", "UPS", "NUT", "Self-hosting", "Automation"]
---

## Introduction

Self-hosting your own services is rewarding, but it comes with physical risks. A sudden power outage can corrupt your databases, break your file systems, and put unnecessary stress on your hardware.

To protect against this, you need an [Uninterruptible Power Supply (UPS)](https://en.wikipedia.org/wiki/Uninterruptible_power_supply). A UPS gives your infrastructure a battery buffer when the grid fails. However, a battery alone is not enough. If you are not home to safely turn off your machines, the battery will eventually drain, and your server will still crash hard.

To fix this, you must build a communication bridge between your UPS and your server. In this article, you will learn how to use [Network UPS Tools (NUT)](https://networkupstools.org/) to continuously monitor your battery metrics and automatically trigger a graceful shutdown across multiple devices before the backup power runs out.

## Understanding the hardware

Before configuring the software, you need to understand the hardware that powers it. For this setup, the infrastructure is backed by an [nJoy Horus Plus 2000](https://www.njoy.global/product/horus-plus-2000/PWUP-LI200H1-AZ01B).

This is a [Line Interactive UPS](https://www.fs.com/blog/comparison-of-ups-topologies-line-interactive-vs-online-vs-offline-3538.html). This means it actively regulates the incoming AC voltage to correct minor power fluctuations without switching to the battery, which extends the lifespan of the unit. It has a capacity of 2000 VA or 1200 W, which provides plenty of headroom for a mini PC, a network switch, and a laptop.

If you open the case, you will find two GP09122L batteries inside.
