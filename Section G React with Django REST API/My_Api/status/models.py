from django.db import models
from django.conf import settings
# Create your models here.

# Image upload function


def upload_status_image(instance, filename):
    return "uploads/{user}/{filename}".format(user=instance.user, filename=filename)


class Status(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    content = models.TextField(null=True, blank=True)
    image = models.ImageField(
        upload_to=upload_status_image, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.content)[0:30]

    class Meta:
        verbose_name_plural = "Status List"
