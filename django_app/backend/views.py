from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view

@api_view(['POST'])
def checkAnswer(request):
        answer = request.data["answer"]
        if answer=="New Delhi":
            return JsonResponse({"result":'Correct'})
        else:
            return JsonResponse({"result":'Wrong'})