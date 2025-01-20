<template>
    <swiper :navigation="true" :modules="[Navigation]" class="mainVisual">
        <swiper-slide
            class="bg-[url('/images/visual_bg1.png')] bg-cover bg-center bg-no-repeat"
            v-for="i in 3"
            :key="i"
        >
            <div class="max-w-screen-2xl text-white mx-auto h-full flex items-center w-10/12">
                <div>
                    <p class="text-7xl leading-tight font-extrabold">
                        Lorem ipsum <br />
                        dolor sit amet,
                        {{ i }}
                    </p>
                    <p class="mt-11 text-3xl leading-normal">
                        Lorem ipsum dolor sit amet, consectetur <br />
                        sed do eiusmod tempor incididunt ut <br />
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
    <div class="grid grid-cols-4 max-w-screen-2xl mx-auto my-40 gap-7">
        <Card
            bg="/images/card_img1.png"
            title="Lorem ipsum <br /> dolor sit amet,"
            content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
            subTxt="Lorem ipsum dolor sit amet,"
        />
        <Card
            bg="/images/card_img2.png"
            title="Lorem ipsum <br /> dolor sit amet,"
            content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
            subTxt="Lorem ipsum dolor sit amet,"
        />
        <Card
            bg="/images/card_img3.png"
            title="Lorem ipsum <br /> dolor sit amet,"
            content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
            subTxt="Lorem ipsum dolor sit amet,"
        />
        <Card
            bg="/images/card_img4.png"
            title="Lorem ipsum <br /> dolor sit amet,"
            content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
            subTxt="Lorem ipsum dolor sit amet,"
        />
    </div>

    <div class="flex items-center justify-center p-12 bg-gray-200">
        <div class="mx-auto w-full max-w-[550px] max-w-screen-2xl">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5">
                    <label for="name" class="mb-3 block text-base font-medium text-[#07074D]"> 성함 </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="이름을 입력해 주세요."
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label for="email" class="mb-3 block text-base font-medium text-[#07074D]"> 이메일 </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label for="message" class="mb-3 block text-base font-medium text-[#07074D]">내용</label>
                    <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="내용을 입력해 주세요"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>
                <div>
                    <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                        보내기
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
</script>
<style scoped>
.mainVisual {
    height: 46.6875rem;
    background-color: #ccc;
}
::v-deep(.swiper-button-next),
::v-deep(.swiper-button-prev) {
    color: #fff;
}
::v-deep(.swiper-button-next:after),
::v-deep(.swiper-button-prev:after) {
    font-size: 3.75rem;
}
::v-deep(.swiper-button-next) {
    right: 2.875rem;
}
::v-deep(.swiper-button-prev) {
    left: 2.875rem;
}
</style>
