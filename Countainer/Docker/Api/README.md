# container app 

# 1. Build the container image

```bash
sudo docker build -t api
```
api is the name of the image
# 2. Run the container

```bash
sudo docker run -p 3000:3000 api
```
3000:3000 is the port mapping from the container to the host
# 3. Test the API

```bash
curl http://localhost:3000
```

curl is a command line tool to make HTTP requests

# 4. Stop the container

```bash
sudo docker ps
```

Get the container id
```bash
sudo docker stop <container id>
```
