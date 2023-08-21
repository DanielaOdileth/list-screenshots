# List Screenshots

# Edge Cases
1. If the user has too many images, the view possibly returns a timeout error 
2. If the images are too heavy, the server or the client could fail. 
3. If the AWS S3 bucket is public, anyone with the correct URL could access the screenshot

# Priority for the initial v0
1. Implement a pagination to display the first 10 images only and avoid rendering unnecessary images. 
2. Add a waitlist to the AWS bucket to avoid access to unknown servers/people 

# Later iterations  
1. Include a spike to check the quality needed to avoid heavy images