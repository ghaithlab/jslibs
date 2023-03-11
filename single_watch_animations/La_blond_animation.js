<script> 
    var repoVersion = "mainSceneNov14_1"
    var repoLinkJsDeliver = "https://cdn.jsdelivr.net/gh/ghaithlab/jslibs@" + repoVersion + "/single_watch_animations/{{wf {&quot;path&quot;:&quot;github-asset-folder-name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/";
    var repoCloudinary = "https://res.cloudinary.com/dafltya7l/image/upload/v1670093669/single-watch-animations/{{wf {&quot;path&quot;:&quot;github-asset-folder-name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/";
		var repoLink = repoCloudinary;
    
    var testimg = [
    {{wf {&quot;path&quot;:&quot;testlinks&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}
    
    ];
    var images = [
        "9_00.webp",
        "9_00-2.webp",
        "9_00-3.webp",
        "9_00-4.webp",
        "9_00-5.webp",
        "9_00-6.webp",
        "9_00-7.webp",
        "9_00-8.webp",
        "9_00-9.webp",
        "9_00-10.webp",
        "9_00-11.webp",
        "9_00-12.webp",
        "9_00-13.webp",
        "9_00-14.webp",
        "9_00-15.webp",
        "9_00-16.webp",
        "9_00-17.webp",
        "9_00-18.webp",
        "9_00-19.webp",
        "9_00-20.webp",
        "9_00-21.webp",
        "9_00-22.webp",
        "9_00-23.webp",
        "9_00-24.webp",
        "9_00-25.webp",
        "9_00-26.webp",
        "9_00-27.webp",
        "9_00-28.webp",
        "9_00-29.webp",
        "9_00-30.webp",
        "9_00-31.webp"];
    
    var imgs = new Array()
                            
                                for (i = 0; i < images.length; i++) {
                                    imgs[i] = new Image()
                                    imgs[i].src = repoLink + images[i];
                                }
                        var obj = {curImg: 0};
                        var tween = TweenMax.to(obj, 2,
                            {
                                curImg: images.length - 1,	
                                roundProps: "curImg",				
                                repeat: 0,									
                                immediateRender: true,			
                                ease: Linear.easeNone,			
                                onUpdate: function () {
                                  $("#myimg").attr("src",repoLink + images[obj.curImg]); 
                                }
                            }
                        );
                        var controller = new ScrollMagic.Controller();
                        var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 0})
                                        .setTween(tween)
                                        // .addIndicators()//
                                        .addTo(controller);
                  
     var images1 = [
    
        "9_00-32.webp",
        "9_00-33.webp",
        "9_00-34.webp",
        "9_00-35.webp",
        "9_00-36.webp",
        "9_00-37.webp",
        "9_00-38.webp",
        "9_00-39.webp",
        "9_00-40.webp",
        "9_00-41.webp",
        "9_00-42.webp",
        "9_00-43.webp",
        "9_00-44.webp",
        "9_00-45.webp",
        "9_00-46.webp",
        "9_00-47.webp",
        "9_00-48.webp",
        "9_00-49.webp",
        "9_00-50.webp",
        "9_00-51.webp",
        "9_00-52.webp",
        "9_00-53.webp",
        "9_00-54.webp",
        "9_00-55.webp",
        "9_00-56.webp",
        "9_00-57.webp",
        "9_00-58.webp",
        "9_00-59.webp",
        "9_00-60.webp",
        "9_00-61.webp",
        "9_00-62.webp",
        "9_00-63.webp",
        "9_00-64.webp",
        "9_00-65.webp",
        "9_00-66.webp",
        "9_00-67.webp",
        "9_00-68.webp",
        "9_00-69.webp",
        "9_00-70.webp",
        "9_00-71.webp",
        "9_00-72.webp",
        "9_00-73.webp",
        "9_00-74.webp",
        "9_00-75.webp",
        "9_00-76.webp",
        "9_00-77.webp",
        "9_00-78.webp",
        "9_00-79.webp",
        "9_00-80.webp",
        "9_00-81.webp",
        "9_00-82.webp",
        "9_00-83.webp",
        "9_00-84.webp",
        "9_00-85.webp",
        "9_00-86.webp",
        "9_00-87.webp",
        "9_00-88.webp",
        "9_00-89.webp",
        "9_00-90.webp",
        "9_00-91.webp",
        "9_00-92.webp",
        "9_00-93.webp",
        "9_00-94.webp",
        "9_00-95.webp",
        "9_00-96.webp",
        "9_00-97.webp",
        "9_00-98.webp",
        "9_00-99.webp",
        "9_00-100.webp",
        "9_00-101.webp",
        "9_00-102.webp",
        "9_00-103.webp",
        "9_00-104.webp",
        "9_00-105.webp",
        "9_00-106.webp",
        "9_00-107.webp",
        "9_00-108.webp",
        "9_00-109.webp",
        "9_00-110.webp",
        "9_00-111.webp"];
    
    imgs = new Array()
                            
                                for (i = 0; i < images1.length; i++) {
                                    imgs[i] = new Image()
                                    imgs[i].src = repoLink + images1[i];
                                }
                        var obj1 = {curImg: 0};
                        var tween1 = TweenMax.to(obj1, 5,
                            {
                                curImg: images1.length - 1,	
                                roundProps: "curImg",				
                                repeat: 0,									
                                immediateRender: true,			
                                ease: Linear.easeNone,			
                                onUpdate: function () {
                                  $("#myimg1").attr("src",repoLink + images1[obj1.curImg]);
                                }
                            }
                        );
                        var controller1 = new ScrollMagic.Controller();
                        var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1500})
                                        .setTween(tween1)
                                        // .addIndicators()// 
                                        .addTo(controller1);
                                        
            mobile();
    function mobile(){
        const mql = window.matchMedia('screen and (max-width: 575px)');
        checkMedia(mql);
        mql.addListener(checkMedia);
        function checkMedia(mql){
            if(mql.matches){
                scene1.duration(800) //change this!
                console.log('Mobile');
            }
        }
    }
    
    tablet();
    function tablet(){
        const mql = window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)');
        checkMedia(mql);
        mql.addListener(checkMedia);
        function checkMedia(mql){
            if(mql.matches){
                scene1.duration(1000) //change this!
                console.log('tablet');
            }
        }
    }
    
    desktop();
    function desktop(){
        const mql = window.matchMedia('screen and (min-width: 992px)');
        checkMedia(mql);
        mql.addListener(checkMedia);
        function checkMedia(mql){
            if(mql.matches){
                scene1.duration(1500) //change this!
                console.log('desktop');
            }
        }
    }                                    
                 
    </script>
