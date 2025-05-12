from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='articles')
    title = models.CharField(max_length=200)
    desc = models.TextField()
    content = models.TextField()
    tags = models.CharField(
        max_length=255, 
        help_text="Введите теги через запятую"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='articles/', blank=True, null=True)

    def __str__(self):
        return self.title