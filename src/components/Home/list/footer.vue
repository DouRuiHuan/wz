<<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="#">
                    <i></i>
                    <span>反馈</span>
                </router-link>
            </li>
            <li>
                <router-link to="#">
                    <i></i>
                    <span>合作</span>
                </router-link>
            </li>
            <li>
                <router-link to="#">
                    <i></i>
                    <span>登录</span>
                </router-link>
            </li>
        </ul>
        <div class="footer_copy">
            <p>Copyright <span>&copy;</span> 2019 163.com</p>
        </div>
    </div>
</template>
<style>
.footer{

    background: #f5f7f9;
    padding: 2.5rem .69rem 0 .88rem;
}
.footer>ul{
    width: 100%;
    height: 4.94rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
}
.footer>ul>li>a{
    font-size: 1rem;
    color: #333;
}
.footer>.footer_copy{

    height:4.69rem;
    background: #f5f7f9;
    /* padding: .88rem .69rem 0 2.81rem; */
}
.footer>.footer_copy>p{
    width: 100%;
    height: 1rem;
    font-size: .75rem;
    color:#999;
    text-align: center
}
</style>