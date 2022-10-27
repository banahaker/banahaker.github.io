<script lang="ts" setup></script>

<template>
    <div class="contact">
        <h1>Contact Me</h1>
        <div class="contacts">
            <div class="content">
                Email: lazpytb@gmail.com
            </div>
            <div class="content">
                Discord: Lazp@6012
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact {
    background-color: #303030;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: white;
        margin-bottom: 30px;
    }
    .contacts {
        display: flex;
        flex-wrap: wrap;
        .content {
            margin-left: 20px;
            margin-top: 30px;
            color: white;
            background-color: #111111;
            border-radius: 5px;
            padding: 15px 25px;
            font-size: 1.5rem;
            font-weight: 200;
        }
    }
}
</style>