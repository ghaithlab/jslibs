var repoVersion = "23oct"
var repoLinkJsDeliver = "https://cdn.jsdelivr.net/gh/ghaithlab/jslibs@" + repoVersion + "/uploads/emotion_full_diamond";
var repoLinkGH = "https://raw.githubusercontent.com/ghaithlab/jslibs/"+  repoVersion +"uploads/emotion_full_diamond";
var repoLink = repoLinkJsDeliver;


var images = [
    "9_00000000.webp",
    "9_00000001.webp",
    "9_00000002.webp",
    "9_00000003.webp",
    "9_00000004.webp",
    "9_00000005.webp",
    "9_00000006.webp",
    "9_00000007.webp",
    "9_00000008.webp",
    "9_00000009.webp",
    "9_00000010.webp",
    "9_00000011.webp",
    "9_00000012.webp",
    "9_00000013.webp",
    "9_00000014.webp",
    "9_00000015.webp",
    "9_00000016.webp",
    "9_00000017.webp",
    "9_00000018.webp",
    "9_00000019.webp",
    "9_00000020.webp",
    "9_00000021.webp",
    "9_00000022.webp",
    "9_00000023.webp",
    "9_00000024.webp",
    "9_00000025.webp",
    "9_00000026.webp",
    "9_00000027.webp",
    "9_00000028.webp",
    "9_00000029.webp",
    "9_00000030.webp",
    "9_00000031.webp",
    "9_00000032.webp",
    "9_00000033.webp",
    "9_00000034.webp",
    "9_00000035.webp",
    "9_00000036.webp",
    "9_00000037.webp",
    "9_00000038.webp",
    "9_00000039.webp",
    "9_00000040.webp",
    "9_00000041.webp",
    "9_00000042.webp",
    "9_00000043.webp",
    "9_00000044.webp",
    "9_00000045.webp",
    "9_00000046.webp",
    "9_00000047.webp",
    "9_00000048.webp",
    "9_00000049.webp",
    "9_00000050.webp",
    "9_00000051.webp",
    "9_00000052.webp",
    "9_00000053.webp",
    "9_00000054.webp",
    "9_00000055.webp",
    "9_00000056.webp",
    "9_00000057.webp",
    "9_00000058.webp",
    "9_00000059.webp",
    "9_00000060.webp",
    "9_00000061.webp",
    "9_00000062.webp",
    "9_00000063.webp",
    "9_00000064.webp",
    "9_00000065.webp",
    "9_00000066.webp",
    "9_00000067.webp",
    "9_00000068.webp",
    "9_00000069.webp",
    "9_00000070.webp",
    "9_00000071.webp",
    "9_00000072.webp",
    "9_00000073.webp",
    "9_00000074.webp",
    "9_00000075.webp",
    "9_00000076.webp",
    "9_00000077.webp",
    "9_00000078.webp",
    "9_00000079.webp",
    "9_00000080.webp",
    "9_00000081.webp",
    "9_00000082.webp",
    "9_00000083.webp",
    "9_00000084.webp",
    "9_00000085.webp",
    "9_00000086.webp",
    "9_00000087.webp",
    "9_00000088.webp",
    "9_00000089.webp",
    "9_00000090.webp",
    "9_00000091.webp",
    "9_00000092.webp",
    "9_00000093.webp",
    "9_00000094.webp",
    "9_00000095.webp",
    "9_00000096.webp",
    "9_00000097.webp",
    "9_00000098.webp",
    "9_00000099.webp",
    "9_00000100.webp",
    "9_00000101.webp",
    "9_00000102.webp",
    "9_00000103.webp",
    "9_00000104.webp",
    "9_00000105.webp",
    "9_00000106.webp",
    "9_00000107.webp",
    "9_00000108.webp",
    "9_00000109.webp",
    "9_00000110.webp",
    "9_00000111.webp"];

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
