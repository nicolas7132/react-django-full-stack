from django.http import HttpResponse

def click(req):
    url = req.GET['url']
    return HttpResponse("you click:" + url)

def model(req):
    # TODO GET "URL" + "CLICK TIMES", return to view.
    return HttpResponse("GET MODEL!")
