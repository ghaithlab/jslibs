//test    
var images = [
    "6339c1a53b99ec57be6f6fa9_watch179.webp",
    "6339c1a57b04fda667d73a04_watch180.webp",
    "6339c1a5b5d7fa5c9ae68533_watch181.webp",
    "6339c1a560d847c32639e310_watch182.webp",
    "6339c1aa1badd9d887dc92ff_watch183.webp",
    "6339c1aadcea69145d290ed0_watch184.webp",
    "6339c1aadcea694049290edc_watch185.webp",
    "6339c1aa2bb4de9273dc7532_watch186.webp",
    "6339c19ca6bc3f47c3c368d8_watch187.webp",
    "6339c19fc32051479f2d0ad5_watch188.webp",
    "6339c1a4689e386633aadc59_watch189.webp",
    "6339c1aa689e3894c4aadc67_watch190.webp",
    "6339c1aa413e414255fe7e82_watch191.webp",
    "6339c1aaa6bc3fd55ac36907_watch192.webp",
    "6339c1adc9cd1b7f5a905ccd_watch194.webp",
    "6339c1aeab4d88006815c427_watch195.webp",
    "6339c1adab4d880de915c426_watch196.webp",
    "63416db998f0f6692f4812fd_watch216.webp"];

var imgs = new Array()
                        
                            for (i = 0; i < images.length; i++) {
                                imgs[i] = new Image()
                                imgs[i].src = "https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/"+ images[i];
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
                              $("#myimg").attr("src","https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/" + images[obj.curImg]); 
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
                </script>
      
      <script>
        //second section// 
    var images1 = [
    "6339c1a53b99ec57be6f6fa9_watch179.webp",
    "6339c1a57b04fda667d73a04_watch180.webp",
    "6339c1a5b5d7fa5c9ae68533_watch181.webp",
    "6339c1a560d847c32639e310_watch182.webp",
    "6339c1aa1badd9d887dc92ff_watch183.webp",
    "6339c1aadcea69145d290ed0_watch184.webp",
    "6339c1aadcea694049290edc_watch185.webp",
    "6339c1aa2bb4de9273dc7532_watch186.webp",
    "6339c19ca6bc3f47c3c368d8_watch187.webp",
    "6339c19fc32051479f2d0ad5_watch188.webp",
    "6339c1a4689e386633aadc59_watch189.webp",
    "6339c1aa689e3894c4aadc67_watch190.webp",
    "6339c1aa413e414255fe7e82_watch191.webp",
    "6339c1aaa6bc3fd55ac36907_watch192.webp",
    "6339c1adc9cd1b7f5a905ccd_watch194.webp",
    "6339c1aeab4d88006815c427_watch195.webp",
    "6339c1adab4d880de915c426_watch196.webp",
    "63416db998f0f6692f4812fd_watch216.webp"];

imgs = new Array()
                        
                            for (i = 0; i < images1.length; i++) {
                                imgs[i] = new Image()
                                imgs[i].src = "https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/"+ images1[i];
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
                              $("#myimg1").attr("src","https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/" + images1[obj1.curImg]);
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
                </script>

<script>
    // third section
    var images2 = [
    "6339c1a53b99ec57be6f6fa9_watch179.webp",
    "6339c1a57b04fda667d73a04_watch180.webp",
    "6339c1a5b5d7fa5c9ae68533_watch181.webp",
    "6339c1a560d847c32639e310_watch182.webp",
    "6339c1aa1badd9d887dc92ff_watch183.webp",
    "6339c1aadcea69145d290ed0_watch184.webp",
    "6339c1aadcea694049290edc_watch185.webp",
    "6339c1aa2bb4de9273dc7532_watch186.webp",
    "6339c19ca6bc3f47c3c368d8_watch187.webp",
    "6339c19fc32051479f2d0ad5_watch188.webp",
    "6339c1a4689e386633aadc59_watch189.webp",
    "6339c1aa689e3894c4aadc67_watch190.webp",
    "6339c1aa413e414255fe7e82_watch191.webp",
    "6339c1aaa6bc3fd55ac36907_watch192.webp",
    "6339c1adc9cd1b7f5a905ccd_watch194.webp",
    "6339c1aeab4d88006815c427_watch195.webp",
    "6339c1adab4d880de915c426_watch196.webp",
    "63416db998f0f6692f4812fd_watch216.webp"];

imgs = new Array()
                        
                            for (i = 0; i < images2.length; i++) {
                                imgs[i] = new Image()
                                imgs[i].src = "https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/"+ images2[i];
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
                              $("#myimg2").attr("src","https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/" + images2[obj2.curImg]);
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
                </script>

<script>
    var images3 = [
   
    "6339c1ae13726553b709a5d4_watch197.webp",
    "6339c1aec9cd1b17df905cce_watch198.webp",
    "6339c1aeab4d88b68915c430_watch199.webp",
    "6339c1ae9841f98280acca62_watch200.webp",
    "6339c1aec320513d362d0af8_watch201.webp",
    "6339c1b0689e381580aadc81_watch202.webp",
    "6339c1b0689e3817d7aadc82_watch203.webp",
    "6339c1b01badd9c6bfdc9332_watch204.webp",
    "6339c1b0c6e89f0e20a76f88_watch205.webp",
    "6339c1b0a4808c4102b1cbf6_watch206.webp",
    "6339c1b0c6e89f479ca76f89_watch207.webp",
    "6339c1b08721fd6f3e9216f1_watch208.webp",
    "6339c1b00a9495a20846b769_watch209.webp",
    "6339c1b2c2d6b0e22598c544_watch210.webp",
    "6339c1b2a4808c1e44b1cbf8_watch211.webp",
    "6339c1b2e851f01593e81efa_watch212.webp",
    "6339c1b2c2d6b01b6e98c545_watch213.webp",
    "6339c1b2413e41c74ffe7f09_watch214.webp",
    "6339c1b261a7c3a300829361_watch215.webp",
    "63416db998f0f6692f4812fd_watch216.webp",
    "63416db998f0f6692f4812fd_watch216.webp"];

imgs = new Array()
                        
                            for (i = 0; i < images3.length; i++) {
                                imgs[i] = new Image()
                                imgs[i].src = "https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/"+ images3[i];
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
                              $("#myimg3").attr("src","https://uploads-ssl.webflow.com/630cdf527ae94a272b091562/" + images3[obj3.curImg]);
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
