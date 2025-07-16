<template>
    <header class="header-section">
        <section class="project">
            <div class="project-about">
                <font-awesome-icon class="icon" :icon="['fas', 'circle']" />
                <p>Saiba mais sobre o projeto!</p>
            </div>
        </section>
        <section class="project">
            <div class="name">
                <p>Zampieri</p>
            </div>
        </section>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped> 

    .name{
        text-align: center;
        border: $border-component;
        background-color: black;
        color: $branco;
        border-radius: 10px;
        padding: 8px;
        width: 75px;

        p{
            font-size: 14px;
        }
    }

    @keyframes pulse-aura {
    0% {
        box-shadow: 0 0 0 0 rgba($verde, 0.4);
    }
    70% {
        box-shadow: 0 0 0 5px rgba($verde, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba($verde, 0);
    }
    }

    .header-section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 75px;

        .project-about{
            @extend %shadow-high;
            gap: $mg-mini;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 14px;
            border: $border-component;
            border-radius: $border-radius-large;

            &:hover{
                cursor: pointer;
            }

            .icon{
                color: $verde;
                font-size: $font-size-mini;
                border-radius: 50%;
                animation: pulse-aura 1.5s infinite;
            }

            p{
                font-weight: 700;
                font-size: 14px;
            }
        }

        .project{
            padding: $mg;
        }
    }
</style>