![banner for Sketchify](https://github.com/mike1572/brickathon/blob/main/public/banner.png?raw=true)

## Inspiration
🧑‍🎨 take time to create 🎨 

What happens when they can use Ai tools to create assets in seconds that they can manipulate for their brand?

Sketchify is a project that draws inspiration from the power of visual communication. In today's fast-paced world, where media and trends change drastically in a matter of weeks, it is essential to convey messages quickly and effectively. Sketchify aims to do just that by creating media posters based on a prompt. 

## What it does
Sketchify takes a concept or a message and turn it into a visual representation that grabs people's attention and stays in their minds. The Sketchify team believes that a single image can convey more than a thousand words, and they strive to make each poster a unique and compelling representation of the prompt. Through Sketchify, they hope to promote the art of visual storytelling and inspire people to think outside the box when it comes to communication.

It is easy to be the photo studio for graphic designers and they can create high quality graphics for social media, that are unique and personalizable. The turn around time is fast which makes it optimal for social media campaigns. For large print media, photoshoots still play a role.

In our case, we designed it for the Constellation Brands company to showcase different alcoholic beverages in their line up.

## How we built it
The project was developed using React with TypeScript. Material UI was utilized for CSS to design the dropdown menu form. TypeScript's ability to be dynamic and concatenate helped in preparing a prompt for Stable Diffusion API to generate high-quality images. 

Buttons for editing and adding text to the photo with a logo was done to create a social media post-friendly platform. Furthermore, Twilio was used to send the final product to the designer's phone allowing for easily sending the post via phone social media apps. The final project was deployed on Vercel with a .tech domain to ensure HTTPS compliance and deliver a top-notch product.

## Challenges we ran into
- Dalle API did not show faces which was a surprise, and when it did, they were blurred or extremely low quality
- Play around with the prompts (garbage in, garbage out). Took a lot of attempts to refine our search
- We kept having different issues with connecting Twilio API with MMS. It required us to be good programmers, referencing the Twilio API documentation, which provides detailed information on how to use the API, handle errors, and work within the API limits. 

## Accomplishments that we're proud of
- First time implementing a darkmode to improve user experience

## What we learned
- Model Stable Diffusion - open source. Found limitations with Dalle with faces - would not render. Important part to showcase face for more personalized experience

[Devpost](https://devpost.com/software/sketchify)
