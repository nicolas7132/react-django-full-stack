from django.shortcuts import render
from django.http import HttpResponse
from myapp.models import Click


def click(request):
    url = request.GET['url']
    if url is None or url == "":
        return HttpResponse("Invalid param.")

    records = Click.objects.filter(url=url)
    if len(records) > 0:
        records[0].times += 1
        records[0].save()
    else:
        click = Click(url=url, times=1)
        click.save()

    return HttpResponse("The Click Event saved.")


def model(request):
    records = Click.objects.all()
    if len(records) == 0:
        return HttpResponse("There is no record now.")
    else:
        html_str = ""
        for rec in records:
            html_str += str(rec.times) + "\t" + rec.url + "<br>"
        return HttpResponse(html_str)
