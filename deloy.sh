rm -rf build.tar
tar -cf build.tar ./build
scp ./build.tar root@206.189.80.145:/var/www/html/
ssh root@206.189.80.145 'cd /var/www/html/;rm -rf esp-xcloud-vod; tar -xf build.tar; mv build esp-xcloud-vod;'

