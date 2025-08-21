# Scope: HTML TEMPATE TO strapi based react js project. 
## Strapi command: npm run develop
## vite-react app running comamnd: npm run dev

## strapi query...
```
http://localhost:1337/api/home-page?populate[0]=Hero_Section.Right_Float_Image&populate[1]=Hero_Section.Side_Left_Arrow_Image&populate[2]=Hero_Section.Slider&populate[3]=About_Section&populate[4]=Choose_Rorho_Ventures.Boxes.Box_Image&populate[5]=Process_Section.Process_Lists&populate[6]=Process_Section.Process_Boxes&populate[7]=Investments.Boxes&populate[8]=Investments.Boxes.Box_Image&populate[9]=Help_Section.Help_Boxes&populate[10]=Testimonials.Client_Reviews.Company_Logo
```

## read more about query population
```
https://docs.strapi.io/cms/api/rest/guides/understanding-populate#:~:text=You%20can%20return%20all%20relations,%3D*%20parameter%20to%20your%20query.
```


## important learn
```
old jquery based html templates should not works perfectly. like slider, effect , animation etc. should be replaced by current npm packages. 
```

## header section query
```
http://localhost:1337/api/global?populate[0]=Header_Section.Header_Image
```

## fetch all entries of collections types
```
http://localhost:1337/api/posts-post?populate=*
```

## fetch collection type in detail via id
```
http://localhost:1337/api/posts-post/iahi6rtmvidx5go068djzlcq
```

## fetch collection types in details via slug
```
http://localhost:1337/api/posts-post?filters[slug][$eq]=6-features-your-primary-bank-should-have
```

## fetch posts by category
```
http://localhost:1337/api/posts-post?filters[$and][0][category][name][$eq]=videos

and if you want to iterate all then, 
http://localhost:1337/api/posts-post?filters[$and][0][category][name][$eq]=videos&populate=*
```


### credentails sample dummy
```
admin strapi: iamshimantadas@gmail.com
password: shi@RDF23@#$
```

### local user strapi 
```
email: iamshimanta....
password: shi@RDF23@#$
```
