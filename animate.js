//test 123   awwab
var repoVersion = "mainScene3"
var repoLinkJsDeliver = "https://cdn.jsdelivr.net/gh/ghaithlab/jslibs@" + repoVersion + "/homeScreenScene/";
var repoLinkGH = "https://raw.githubusercontent.com/ghaithlab/jslibs/"+  repoVersion +"/homeScreenScene/";
var repoLink = repoLinkJsDeliver;


var images = [
    "watch179.webp",
    "watch180.webp",
    "watch181.webp",
    "watch182.webp",
    "watch183.webp",
    "watch184.webp",
    "watch185.webp",
    "watch186.webp",
    "watch187.webp",
    "watch188.webp",
    "watch189.webp",
    "watch190.webp",
    "watch191.webp",
    "watch192.webp",
    "watch194.webp",
    "watch195.webp",
    "watch196.webp",
    "watch216.webp"];

var imgs = new Array()
                        
                            for (i = 0; i < images.length; i++) {
                                imgs[i] = new Image()
                                imgs[i].src = repoLink + images[i];
                            }
                    var obj = {curImg: 0};
                    var tween = TweenMax.to(obj, 5,
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
                    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3100})
                                    .setTween(tween)
                                    .addIndicators() 
                                    .addTo(controller);
                    $("form.move input[name=duration]:radio").change(function () {
                        scene.duration($(this).val());
                    });
        //second section// 
    var images1 = [
    "watch179.webp",
    "watch180.webp",
    "watch181.webp",
    "watch182.webp",
    "watch183.webp",
    "watch184.webp",
    "watch185.webp",
    "watch186.webp",
    "watch187.webp",
    "watch188.webp",
    "watch189.webp",
    "watch190.webp",
    "watch191.webp",
    "watch192.webp",
    "watch194.webp",
    "watch195.webp",
    "watch196.webp",
    "watch216.webp"];

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
                    var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 2600})
                                    .setTween(tween1)
                                    .addIndicators() 
                                    .addTo(controller1);
                    $("form.move input[name=duration]:radio").change(function () {
                        scene.duration($(this).val());
                    });

// third section
    var images2 = [
    "watch179.webp",
    "watch180.webp",
    "watch181.webp",
    "watch182.webp",
    "watch183.webp",
    "watch184.webp",
    "watch185.webp",
    "watch186.webp",
    "watch187.webp",
    "watch188.webp",
    "watch189.webp",
    "watch190.webp",
    "watch191.webp",
    "watch192.webp",
    "watch194.webp",
    "watch195.webp",
    "watch196.webp",
    "watch216.webp"];

imgs = new Array()
                        
                            for (i = 0; i < images2.length; i++) {
                                imgs[i] = new Image()
                                imgs[i].src = repoLink+ images2[i];
                            }
                    var obj2 = {curImg: 0};
                    var tween2 = TweenMax.to(obj2, 5,
                        {
                            curImg: images2.length - 1,	
                            roundProps: "curImg",				
                            repeat: 0,									
                            immediateRender: true,			
                            ease: Linear.easeNone,			
                            onUpdate: function () {
                              $("#myimg2").attr("src",repoLink + images2[obj2.curImg]);
                            }
                        }
                    );
                    var controller2 = new ScrollMagic.Controller();
                    var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 1800})
                                    .setTween(tween2)
                                    .addIndicators() 
                                    .addTo(controller2);
                    $("form.move input[name=duration]:radio").change(function () {
                        scene.duration($(this).val());
                    });
    var images3 = [
   
    "watch197.webp",
    "watch198.webp",
    "watch199.webp",
    "watch200.webp",
    "watch201.webp",
    "watch202.webp",
    "watch203.webp",
    "watch204.webp",
    "watch205.webp",
    "watch206.webp",
    "watch207.webp",
    "watch208.webp",
    "watch209.webp",
    "watch210.webp",
    "watch211.webp",
    "watch212.webp",
    "watch213.webp",
    "watch214.webp",
    "watch215.webp",
    "watch216.webp",
    "watch216.webp"];

imgs = new Array()
                        
                            for (i = 0; i < images3.length; i++) {
                                imgs[i] = new Image()
                                imgs[i].src = repoLink + images3[i];
                            }
                    var obj3 = {curImg: 0};
                    var tween3 = TweenMax.to(obj3, 5,
                        {
                            curImg: images3.length - 1,	
                            roundProps: "curImg",				
                            repeat: 0,									
                            immediateRender: true,			
                            ease: Linear.easeNone,			
                            onUpdate: function () {
                              $("#myimg3").attr("src",repoLink + images3[obj3.curImg]);
                            }
                        }
                    );
                    var controller3 = new ScrollMagic.Controller();
                    var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 1100})
                                    .setTween(tween3)
                                    .addIndicators() 
                                    .addTo(controller3);
                    $("form.move input[name=duration]:radio").change(function () {
                        scene.duration($(this).val());
                    });
