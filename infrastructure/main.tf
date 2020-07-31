terraform {
  backend "s3" {
    bucket = "sh.csarko.terraform"
    key = "portfolio-site.csarko.sh/terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region = "us-west-2"
}

# TODO Host website on CloudFront & make rss-scraper a scheduled lambda
