# react-django-full-stack

### Visit Demo
Article List: [http://yc.kyle.net.cn/myapp/index](http://yc.kyle.net.cn/myapp/index)
Click Event Statistics: [http://yc.kyle.net.cn/myapp/model](http://yc.kyle.net.cn/myapp/model)

### how to complie react app
```
cd my-app
npm install
npm run build
copy "my-app/build" to "my-server/build"
```

### how to complie django app
```
cd my-server
python manage.py makemigrations myapp
python manage.py migrate
python manage.py runserver
```

### Deploy
```
Ubuntu 16.04.4 x64
Python 3.5.2
Django (2.0.3)
nodejs 8.10.0
npm 5.6.0
```