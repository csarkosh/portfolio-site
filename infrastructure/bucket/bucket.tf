provider "aws" {
  region = "us-west-2"
}

data "aws_s3_bucket" "bucket" {
  bucket = "csarko.sh"
}

output "regional_domain_name" {
  value = data.aws_s3_bucket.bucket.bucket_regional_domain_name
}

output "id" {
  value = data.aws_s3_bucket.bucket.id
}
