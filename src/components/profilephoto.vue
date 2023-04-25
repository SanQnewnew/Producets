<template>
  <div class="photomain">
    <div class="fstround">
        <div class="secround">
            <div class="thround">
                <img src="../assets/OIP-C.jpg" class="photo"/>
            </div>
        </div>
    </div>
    <div class="ptright">
        <h2>Chat AI</h2>
        <p class="chatmsg">由open ai研发</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.photomain{
    height: 90px;
    width: 250px;
    background-color: #118BFA;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 20px #118BFA;
    overflow: hidden;
    margin-top: 20px;
    cursor: pointer;
}
.fstround{
    height: 58px;
    width: 58px;
    border-radius: 50%;
    background-color: white;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.secround{
    height: 54px;
    width: 54px;
    border-radius: 50%;
    overflow: hidden;
}
.photo{
    height: 54px;
    width: 54px;
    object-fit: cover;
}.ptright{
    color: white;
    margin-left: 10px;
    line-height: 10px;
}
.chatmsg{
    white-space: nowrap;
    margin-left: 8px;
}
</style>
