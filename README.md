# [Portfolio Site](https://csarko.sh) &middot; ![Deploy](https://github.com/csarkosh/portfolio-site/workflows/Deploy/badge.svg) [![Website Status](https://img.shields.io/website/https/csarko.sh.svg)](https://csarko.sh)
The purpose of this project is to demonstrate a website with [100/100 performance rating on Google Lighthouse](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fcsarko.sh%2F&tab=desktop) and to serve as my portfolio website.

* **Accessible & Responsive:** The website is fully accessible and scores a 100/100 on Google Lighthouse's Accessibility audit, and collapses down from a desktop view into a responsive mobile view.

* **Fully Automated:** Builds and deployments are fully automated and are initiated from code changes pushed to the master branch of this repository. The automation runs on [Github Actions](https://github.com/features/actions) and [Docker](https://www.docker.com/), and deploys the [React](https://reactjs.org/) application to [AWS](https://aws.amazon.com/).

* **Immutable Infrastructure:** All cloud infrastructure written and commited as code using [Terraform](https://www.terraform.io/). As well, infrastructure is created and updated immutably using [Terraform's graph-like configuration language](https://github.com/hashicorp/hcl).

* **SEO & Web Best Practices:** The website scores a 100/100 on Google Lighthouse's SEO & Best Practices audit.

[View the website here.](https://csarko.sh)

## Architecture
![Architecture diagram](./.github/portfolio-site.png)

This project is part of an article I wrote on tuning Core Web Vitals performance and [can be read here](https://medium.com/@csarkosh/configure-aws-cloudfront-for-optimal-page-speed-with-core-web-vitals-performance-metrics-2b871e245e20). 
