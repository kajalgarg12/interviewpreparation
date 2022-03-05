# from unicodedata import category
from django.db import models

# Create your models here.
class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images',default=False,blank=False)
    name = models.CharField(max_length=150,null= False,blank=False)
    price =  models.DecimalField(max_digits=6,decimal_places=2,null = False,blank=False)
    date = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    category = models.CharField(max_length=50,null= True)

    def _str_(self):
        return self.name

