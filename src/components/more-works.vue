<template>
    <div class="frame">
        <div class="custom-btn btn-3"><span />
            <div class="text">前往作品集 - 查看更多作品</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.frame {
    width: 90%;
    margin: 40px auto;
    text-align: center;
    position: fixed;
    bottom: 0;
    z-index: 5;
    padding: 10px;
}


.custom-btn {
    margin: 20px;
    width: 300px;
    height: 40px;
    color: #fff;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    width: 100%;
}

/* 3 */
.btn-3 {
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
    width: 300px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;

}

.btn-3 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.btn-3:before,
.btn-3:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
}

.btn-3:before {
    height: 0%;
    width: 2px;
}

.btn-3:after {
    width: 0%;
    height: 2px;
}

.btn-3:hover {
    background: transparent;
    box-shadow: none;
}

.btn-3:hover:before {
    height: 100%;
}

.btn-3:hover:after {
    width: 100%;
}

.btn-3 span:hover {
    color: rgba(2, 126, 251, 1);
}

.btn-3 span:before,
.btn-3 span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
}

.btn-3 span:before {
    width: 2px;
    height: 0%;
}

.btn-3 span:after {
    width: 0%;
    height: 2px;
}

.btn-3 span:hover:before {
    height: 100%;
}

.btn-3 span:hover:after {
    width: 100%;
}
</style>