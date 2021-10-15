//模拟评论数据
const comment = {
    status: "成功",
    code: 200,
    data:[
        {
            name:'Summer',
            id:19870621,
            headImg:'https://img1.baidu.com/it/u=3943832628,3928418396&fm=26&fmt=auto',
            comment:'一级评论',
            time:'2019年9月16日 18:43',
            commentNum:2,
            inputShow:false,
            reply:[
                {
                    from:'南之纪',
                    fromId:19891221,
                    fromHeadImg:'https://img2.baidu.com/it/u=610330141,3801718282&fm=26&fmt=auto',
                    to:'Summer',
                    toId:19870621,
                    comment:'这是二级评论',
                    time:'2019年9月16日 18:43',
                    commentNum:1,
                    inputShow:false,
                    reply:[
                        {name:'九思而行',
                        id:20190830,
                        headImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0915%252F01171c68j00qzh33a0045c000u000vem.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636813125&t=589e1bc2040c801622750fdc09a6b3a5',
                        comment:'就因为JSON.stringify，我的年终奖差点打水漂了',
                        time:'2019年9月16日 18:43',
                        commentNum:0,
                        inputShow:false,
                        reply:[]
                    }
                    ]
                },
                {
                    from:'楼小黑',
                    fromId:1123,
                    fromHeadImg:'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg',
                    to:'Summer',
                    toId:19870621,
                    comment:'我们UI跟我们就没有过这样的交流',
                    time:'2019年9月16日 18:43',
                    commentNum:0,
                    inputShow:false,
                    reply:[
                        {name:'九思而行',
                        id:20190830,
                        headImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0915%252F01171c68j00qzh33a0045c000u000vem.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636813125&t=589e1bc2040c801622750fdc09a6b3a5',
                        comment:'就因为JSON.stringify，我的年终奖差点打水漂了',
                        time:'2019年9月16日 18:43',
                        commentNum:0,
                        inputShow:false,
                        reply:[]
                    }
                    ]

                }
            ]
        },
        {
            name:'南之纪',
            id:19891221,
            headImg:'https://img2.baidu.com/it/u=610330141,3801718282&fm=26&fmt=auto',
            comment:'业务需求估期需要注意什么',
            time:'2019年9月16日 18:43',
            commentNum:1,
            inputShow:false,
            reply:[
                {
                    from:'La HankQin',
                    fromId:19870621,
                    fromHeadImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
                    to:'南之纪',
                    toId:19891221,
                    comment:'哎，感觉我干不了这么多',
                    time:'2019年9月16日 18:43',
                    commentNum:1,
                    inputShow:false,
                    reply:[
                        {name:'九思而行',
                        id:20190830,
                        headImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0915%252F01171c68j00qzh33a0045c000u000vem.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636813125&t=589e1bc2040c801622750fdc09a6b3a5',
                        comment:'就因为JSON.stringify，我的年终奖差点打水漂了',
                        time:'2019年9月16日 18:43',
                        commentNum:0,
                        inputShow:false,
                        reply:[]
                    }
                    ]

                }
            ]
        },
        {
            name:'九思而行',
            id:20190830,
            headImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0915%252F01171c68j00qzh33a0045c000u000vem.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636813125&t=589e1bc2040c801622750fdc09a6b3a5',
            comment:'就因为JSON.stringify，我的年终奖差点打水漂了',
            time:'2019年9月16日 18:43',
            commentNum:0,
            inputShow:false,
            reply:[]
        },
    ]
  };
  
  export {comment}
  