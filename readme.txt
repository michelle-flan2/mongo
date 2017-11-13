CURL is a computer software project providing a library and command-line tool for transferring data using various protocols.

https://api.mlab.com/api/1/databases?apiKey=MQSsVQJgyY5L5nppu7FqPQO6gQGQBf1y

*   Trying 54.144.240.132...
* TCP_NODELAY set
* Connected to api.mlab.com (54.144.240.132) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: C:\Users\G00314881\Desktop\mongo\ca-bundle.crt
  CApath: none
* TLSv1.2 (OUT), TLS header, Certificate Status (22):
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS change cipher, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-ECDSA-AES256-GCM-SHA384
* ALPN, server did not agree to a protocol
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=ObjectLabs Corporation; CN=api.mlab.com
*  start date: Feb 21 00:00:00 2016 GMT
*  expire date: Feb 25 12:00:00 2019 GMT
*  subjectAltName: host "api.mlab.com" matched cert's "api.mlab.com"
*  issuer: C=US; O=DigiCert Inc; CN=DigiCert SHA2 Secure Server CA
*  SSL certificate verify ok.
> GET /api/1/databases?apiKey=MQSsVQJgyY5L5nppu7FqPQO6gQGQBf1y HTTP/1.1
> Host: api.mlab.com
> User-Agent: curl/7.53.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Mon, 13 Nov 2017 10:51:00 GMT
< Server: Apache/2.4.7 (Ubuntu)
< Expires: Tue, 01 Feb 2000 08:00:00 GMT
< Last-Modified: Mon, 13 Nov 2017 10:51:00 GMT
< Cache-Control: no-store, no-cache, must-revalidate, max-age=0, post-check=0, pre-check=0
< Pragma: no-cache
< X-Frame-Options: DENY
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Origin: *
< Transfer-Encoding: chunked
< Content-Type: application/json;charset=utf-8
<
[ "mongo-lab" ]* Connection #0 to host api.mlab.com left intact