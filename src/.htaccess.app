#for installation under folder "academy-ng"

Options +FollowSymLinks
IndexIgnore */*
RewriteEngine on

# if a directory or a file exists, use it directly
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteCond %{REQUEST_URI} !/api

# otherwise forward it to index.html 
RewriteRule ^.*$ - [NC,L]
RewriteRule ^academy-ng/. /academy-ng/index.html [NC,L]