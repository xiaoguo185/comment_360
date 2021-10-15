<template>
    <div>
        <div  class="my-reply">
          <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
            <div class="reply-info">
              <el-input
         type="textarea"
         :rows="2"
          id="replyInput" 
          placeholder="输入评论..."
           @focus="showReplyBtn"  
         v-model="replyComment">
</el-input>
            </div>
            <div class="reply-btn-box" >
                <el-button class="reply-btn" size="medium" @click="AddComment" type="info">发表评论</el-button>
            </div>
        </div>
        <div v-for="(item,i) in comments" :key="i" class="author-title reply-father">
             <i class="el-icon-caret-bottom header-img" v-if="item.showFar_Com" @click="openComment(item)" ></i>
             <i class="el-icon-caret-top header-img" v-if="!item.showFar_Com"  @click="openComment(item)"></i>
            <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
            <div class="author-info">
                <span class="author-name">{{item.name}}</span>
                <span class="author-time">{{item.time}}</span>
            </div>
            <div class="icon-btn">
                <span @click="ShowReInput(i,item.name,item.id)">回复</span>
            </div>
            <div class="talk-box">
                <p>
                    <span class="reply">{{item.comment}}</span>
                </p>
            </div>
            <div class="reply-box" v-if="item.showFar_Com"> 
                <div v-for="(reply,j) in item.reply" :key="j" class="author-title">
                      <i class="el-icon-caret-bottom header-img" v-if="reply.showChild_Com" @click="openChildComment(reply)" ></i>
                      <i class="el-icon-caret-top header-img" v-if="!reply.showChild_Com"  @click="openChildComment(reply)"></i>
                    <el-avatar class="header-img" :size="40" :src="reply.fromHeadImg"></el-avatar>
                    <div class="author-info">
                        <span class="author-name">{{reply.from}}</span>
                        <span class="author-time">{{reply.time}}</span>
                    </div>
                    <div class="icon-btn">
                        <span @click="ShowReInput(i,reply.from,reply.id)">回复</span>
               
                    </div>
                    <div class="talk-box">
                        <p>
                            <span>@ {{reply.to}}:</span>
                            <span class="reply">{{reply.comment}}</span>
                        </p>
                    </div>
                    <div class="reply-box" v-if="reply.showChild_Com">
         
                    </div>
                </div>
            </div>
            <div  v-show="Showinput(i)" class="my-reply my-comment-reply">
                <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
            <div class="reply-info">
              <el-input
         type="textarea"
         :rows="2"
          id="replyInput" 
          placeholder="输入评论..."
        class="reply-input reply-comment-input"
      
         v-model="replyComment">
</el-input>
            </div>
                <div class=" reply-btn-box">
                    <el-button class="reply-btn" size="medium" @click="AddCommentReply(i,j)" type="info">发表评论</el-button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
  import * as CommentData from '../mockdata'

export default {
    name:'Comment',
    data(){
        return{
            btnShow: false,
            showChild_Com:true,
            index:'0',
            replyComment:'',
            myName:'Summer',
            myHeader:'https://img1.baidu.com/it/u=3943832628,3928418396&fm=26&fmt=auto',
            myId:19870621,
            to:'',
            toId:-1,
            comments:[],
 
        }
    },

    created(){
      //加载评论
        this.localComents();
    },
    methods: {
        localComents(){
            if(JSON.parse(localStorage.getItem('commentList'||'[]'))===null){
                        localStorage.setItem('commentList',JSON.stringify(CommentData.comment.data));
                         this.comments=JSON.parse(localStorage.getItem('commentList'||'[]'));
            }
            else
            {
               this.comments=JSON.parse(localStorage.getItem('commentList'||'[]'));
            }
               
               
        },


        //折叠父评论
        openComment(item){
          console.log('dsf',item.showFar_Com)
          if(!item.showFar_Com){   
             this.$set(item,'showFar_Com',false);
            console.log('2',item.showFar_Com)
        item.showFar_Com=!item.showFar_Com;
  }
  else{
    item.showFar_Com=!item.showFar_Com;
  }
        },
        //折叠回复
        openChildComment(reply){
  
          if(!reply.showChild_Com){   
             this.$set(reply,'showChild_Com',false);
            console.log('2',reply.showChild_Com)
        reply.showChild_Com=!reply.showChild_Com;
  }
  else{
    reply.showChild_Com=!reply.showChild_Com;
  }
        },
        showReplyBtn(){
            this.btnShow = true
        },
        hideReplyBtn(){
            this.btnShow = false
        },
        ShowReInput(i,name,id){
            console.log('123',this.index)
            this.comments[this.index].inputShow = false
            this.index =i
            this.comments[i].inputShow = true
            this.to = name
            this.toId = id
        },
        Showinput(i){
            return this.comments[i].inputShow 
        },

        AddComment(){
            if(!this.replyComment){
                 this.$message({
                    showClose: true,
                    type:'warning',
                    message:'评论不能为空'
                })
            }else{
                let a ={}
                let timeNow = new Date().getTime();
                let time= this.dateStr(timeNow);
                a.name= this.myName
                a.comment =this.replyComment
                a.headImg = this.myHeader
                a.time = time
                a.inputShow=false
                a.reply=[]
                 let list = JSON.parse(localStorage.getItem('commentList')|| '[]');
                list.unshift(a);
                // console.log('list',list)
                localStorage.setItem('commentList',JSON.stringify(list));
                this.comments.push(a)
                //  this.$forceUpdate();
                this.replyComment = ''
           

            }
        },
        AddCommentReply(i,j){
            if(!this.replyComment){
                 this.$message({
                    showClose: true,
                    type:'warning',
                    message:'评论不能为空'
                })
            }else{
                let a ={}
                let timeNow = new Date().getTime();
                let time= this.dateStr(timeNow);
                a.from= this.myName
                a.to = this.to
                a.fromHeadImg = this.myHeader
                a.comment =this.replyComment
                a.time = time
                a.inputShow=false
                a.reply=[]
                console.log('这是AddCommentReply的a',a)

                 let list = JSON.parse(localStorage.getItem('commentList')|| '[]');
                list[i].reply.unshift(a);
                localStorage.setItem('commentList',JSON.stringify(list));
                this.comments=JSON.parse(localStorage.getItem('commentList')|| '[]')
                this.replyComment = ''
                this.comments[this.index].inputShow = false

            }
        },
 
        dateStr(date){
            //获取js 时间戳
            var time=new Date().getTime();
            //去掉 js 时间戳后三位，与php 时间戳保持一致
            time=parseInt((time-date)/1000);
            //存储转换值 
            var s;
            if(time<60*10){//十分钟内
                return '刚刚';
            }else if((time<60*60)&&(time>=60*10)){
                //超过十分钟少于1小时
                s = Math.floor(time/60);
                return  s+"分钟前";
            }else if((time<60*60*24)&&(time>=60*60)){ 
                //超过1小时少于24小时
                s = Math.floor(time/60/60);
                return  s+"小时前";
            }else if((time<60*60*24*30)&&(time>=60*60*24)){ 
                //超过1天少于30天内
                s = Math.floor(time/60/60/24);
                return s+"天前";
            }else{ 
                //超过30天ddd
                var date= new Date(parseInt(date));
                return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
            }
        }
    },    
}
</script>
<style lang="scss" scoped>
.my-reply{
    padding:10px;
    background-color: #fafbfc;
    .in_comment{
      width:600px;
      
    }
    .header-img{
        display:inline-block;
        vertical-align:top;
    }
    .reply-info{
        display :inline-block;
        margin-left:5px;
        width:90%;
        @media screen and (max-width:1200px) {
            width:80%;
    }
        .reply-input{
            min-height:20px;
            line-height:22px;
            padding: 10px 10px;
            color: #ccc;
            background-color: #fff;
            border-radius: 5px;

        }
    }
    .reply-btn-box{
     margin:10px 0 10px 50px;
        height :25px;
        // margin: 10px 0;
        .reply-btn{
            position:relative;
           
            margin-right: 15px;
        }
    }
}
.my-comment-reply{
    margin-left: 50px;
    .reply-input{
        width: flex;
    }
}
.author-title:not(:last-child){
    border-bottom: 1px solid rgba(178,186,194,.3);
}
.author-title{
    padding:10px;
    .header-img{
        display :inline-block;
        vertical-align: top;
    }
    .author-info{
        display: inline-block;
        margin-left:5px;
        width:60%;
        height: 40px;
        line-height:20px;
    
        >span {
            display:block;
            cursor: pointer;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .author-name{
            color: #000;
            font-size :18px;
            font-weight :bold;
        }
        .author-time{
            font-size :14px;
        }
    }
    .icon-btn{
        width :30%;
        padding :0 !important ;
        float: right;
        @media screen and (max-width : 1200px){
            width: 20%;
            padding :7px;
        }
        >span 
          {cursor: pointer;
          }
    
        .iconfont {
            margin: 0 5px;
        }
    }
    .talk-box{
        margin :0 50px;
    
        >p{
           margin: 0;
        }
        .reply{
            font-size: 16px;
            color :#000;
        }
    }
    .reply-box{
        margin: 10px 0 0 50px;
        background-color: #efefef;
    }
    }
    

</style>

