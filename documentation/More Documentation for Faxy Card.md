# More Documentation for Faxy Card
Faxy Card is a single page website theme created by Ciprian Turcu. I purchased it from [themeforest.net] (http://themeforest.net/). Mr. Turcu graciously provided some documentation for his theme explaining the basic structure of the files and some tips and tricks for the CSS. I'm a newbie Web developer, and I had **lots** of questions. This file explains what I learned.

I'm a programmer/writer by trade, which means that I know how to write code and how to understand it, and I know how to write about it too. This file also serves as a writing sample for those who want to know.

## The Profile Picture
The profile picture is framed with a circle. The frame size is 196 x 196 pixels, as shown in the styles.css file:
```
.profile-picture .frame{
    background: url('../img/profile-frame.png');
    width:196px;
    height:196px;
```
Cropping the photo as a square in iPhoto and then exporting it to the image directory turned out to be the simplest way to do this, which I didn't know at first. Never mind, I'm happy with the photo now.

## The List in Looking for Opportunities
This list is created by using a series of nested divs, as shown here:
```
<div class="hireme">
    <a href="#" class="button">
    <img src="HTML/img/hireme.png" alt="" />
    <span>Looking for opportunities:</span></a>
        <div class="list">
            <ul>
                <li>
                    <!--<img src="HTML/img/rates.png" alt="" />-->
                    <a href="#">Content strategy</a></li>
                <li>
                    <!--<img src="HTML/img/screen.png" alt="" />-->
                    <a href="#">Writing and editing</a></li>
                <li>
                    <!--<li><img src="HTML/img/stats.png" alt="" />-->
                    <a href="#">Web development</a></li>
            </ul>
            <!--<ul class="right">
                <li>
                    <img src="HTML/img/time.png" alt="" />
                    <a href="#">Customer focus</a></li>
                <li>
                	<img src="HTML/img/wheel.png" alt="" />
                    <a href="#">Vision and strategy</a></li>
                <li>
                	<img src="HTML/img/check.png" alt="" />
                    <a href="#">Strong results</a></li>
            </ul>-->
        </div>
</div>
```
I wanted to put other content in the list, but I didn't care for the images. Commenting them out took care of that. Then I realized I didn't need a double column for the list, as I had only a few areas in which I was interested in finding opportunities. I started by commenting out the entire list on the right `ul class=right`, but that didn't look right, because my list of areas was squashed to the left and the spacing was odd as well.

I used the Chrome Developer Tools to zero in on exactly what I was looking at and where it was styled in styles.css. I figured if I made the `list` class the entire width of the div that would help with the list item spacing. The `hireme` div width is 223 px, but the `list` width is 