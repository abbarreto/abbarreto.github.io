---
layout: post
title: VCQ&TURIS - Summer School 2024.
date: 2024-09-08 13:13:00
description: Interfacing Gravity and Quantum Physics.
tags: summer school
categories: conferences
thumbnail: assets/img/posts/2024-09-08-vcq-turis/Logo_VCQ-TURIS.png
images:
  compare: true
  slider: true
---

This is an example post with advanced image components.


## Image Slider

This is a simple image slider. It uses the [Swiper](https://swiperjs.com/) library. Check the [examples page](https://swiperjs.com/demos) for more information of what you can achieve with it.

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/posts/2024-09-08-vcq-turis/VCQ-TURIS-SummerSchool2024.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/posts/2024-09-08-vcq-turis/VCQ-TURIS-SummerSchool2024.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/posts/2024-09-08-vcq-turis/VCQ-TURIS-SummerSchool2024.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/posts/2024-09-08-vcq-turis/VCQ-TURIS-SummerSchool2024.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/posts/2024-09-08-vcq-turis/VCQ-TURIS-SummerSchool2024.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

## Image Comparison Slider

This is a simple image comparison slider. It uses the [img-comparison-slider](https://img-comparison-slider.sneas.io/) library. Check the [examples page](https://img-comparison-slider.sneas.io/examples.html) for more information of what you can achieve with it.

<img-comparison-slider>
  {% include figure.liquid path="assets/img/posts/2024-09-08-vcq-turis/VCQ-TURIS-SummerSchool2024-2.jpeg" class="img-fluid rounded z-depth-1" slot="first" %}
  {% include figure.liquid path="assets/img/posts/2024-09-08-vcq-turis/VCQ-TURIS-SummerSchool2024-2.jpeg" class="img-fluid rounded z-depth-1" slot="second" %}
</img-comparison-slider>