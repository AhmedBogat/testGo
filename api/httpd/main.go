package main

import (
	"newsfeeder/httpd/handler"
	"newsfeeder/platform/newsfeed"

	"github.com/gin-gonic/gin"
)

func main() {
	
	feed := newsfeed.New()
	r := gin.Default()

	api := r.Group("/api")
	{

	 api.GET("/ping",      handler.PingGet())
	 api.GET("/newsfeed",  handler.NewsfeedGet(feed))
	 api.POST("/newsfeed", handler.NewsfeedGet(feed))
	}

	r.Run("0.0.0.0:5000")

	
}