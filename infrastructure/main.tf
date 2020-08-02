terraform {
  backend "s3" {
    bucket = "sh.csarko.terraform"
    key = "portfolio-site.csarko.sh/terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region = "us-east-1"
}

locals {
  domain_name = "csarko.sh"
}

data "aws_acm_certificate" "cert" {
  domain = "csarko.sh"
}

data "aws_route53_zone" "zone" {
  name = "csarko.sh."
}

module "s3" {
  source = "./bucket"
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled = true
  aliases = [local.domain_name]
  default_root_object = "index.html"
  custom_error_response {
    response_page_path = "/index.html"
    error_code = 404
    response_code = 200
  }
  origin {
    domain_name = module.s3.regional_domain_name
    origin_id = module.s3.id
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.cert.arn
    ssl_support_method = "sni-only"
  }
  ordered_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    path_pattern = "/static/*"
    target_origin_id = module.s3.id
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 31536000
    max_ttl = 31536000
    default_ttl = 31536000
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
  ordered_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    path_pattern = "/index.html"
    target_origin_id = module.s3.id
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    max_ttl = 0
    default_ttl = 0
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
  ordered_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    path_pattern = "/asset-manifest.json"
    target_origin_id = module.s3.id
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    max_ttl = 0
    default_ttl = 0
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = module.s3.id
    viewer_protocol_policy = "redirect-to-https"
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }
}

resource "aws_route53_record" "record" {
  name = local.domain_name
  type = "A"
  zone_id = data.aws_route53_zone.zone.zone_id
  alias {
    evaluate_target_health = true
    name = aws_cloudfront_distribution.cdn.domain_name
    zone_id = aws_cloudfront_distribution.cdn.hosted_zone_id
  }
}
