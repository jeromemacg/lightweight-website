from django.db import models

# Create your models here.
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.search import index
from wagtail.api import APIField


class BlogIndexPage(Page):
    intro = RichTextField(blank=True)

    api_fields = [
        APIField('intro'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('intro')
    ]

    # Only allow BlogPages beneath this page.
    subpage_types = ["blog.BlogPage"]


class BlogPage(Page):
    # Different from the real publication date, for editorial control.
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250)
    body = RichTextField(blank=True)

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    api_fields = [
        APIField('date'),
        APIField('intro'),
        APIField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('intro'),
        FieldPanel('body'),
    ]

    # Only allow this page to be created beneath a BlogIndexPage.
    parent_page_types = ["blog.BlogIndexPage"]