<template>
    <swiper :navigation="true" :modules="[Navigation]" class="mainVisual  2xl:h-[46.6875rem] md:h-[31.25rem] h-[24rem]">
        <swiper-slide
            class="bg-[url('/public/images/visual_bg1.png')] bg-cover bg-center bg-no-repeat"
            v-for="i in 3"
            :key="i"
        >
            <div class="max-w-screen-2xl text-white mx-auto h-full flex items-center  lg:w-10/12 2xl:p-0 px-5">
                <div class="fade-in-up">
                    <p class=" text-3xl leading-tight font-extrabold 2xl:text-7xl md:text-5xl">
                        Lorem ipsum <br />
                        dolor sit amet,
                        {{ i }}
                    </p>
                    <p class="mt-5 leading-normal  2xl:text-3xl 2xl:mt-11 md:text-lg text-base">
                        Lorem ipsum dolor sit amet, consectetur <br />
                        sed do eiusmod tempor incididunt ut <br />
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
	<div class="2xl:px-28 px-5">
		<div class="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 max-w-screen-2xl mx-auto 2xl:my-40 my-20 gap-7">
			<Card
				bg="/public/images/card_img1.png"
				title="Lorem ipsum <br /> dolor sit amet,"
				content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
				subTxt="Lorem ipsum dolor sit amet,"
                data-aos="fade-up" data-aos-delay="0"
			/>
			<Card
				bg="/public/images/card_img2.png"
				title="Lorem ipsum <br /> dolor sit amet,"
				content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
				subTxt="Lorem ipsum dolor sit amet,"
                data-aos="fade-up" data-aos-delay="50"
			/>
			<Card
				bg="/public/images/card_img3.png"
				title="Lorem ipsum <br /> dolor sit amet,"
				content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
				subTxt="Lorem ipsum dolor sit amet,"
                data-aos="fade-up" data-aos-delay="100"
			/>
			<Card
				bg="/public/images/card_img4.png"
				title="Lorem ipsum <br /> dolor sit amet,"
				content="Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,"
				subTxt="Lorem ipsum dolor sit amet,"
                data-aos="fade-up" data-aos-delay="150"
			/>
		</div>
	</div>

    <div class="flex items-center justify-center bg-gray-200 py-12 2xl:px-28 px-5 ">
        <div class="mx-auto w-full max-w-screen-2xl">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5"  data-aos="fade-up">
                    <label for="name" class="mb-3 block text-base font-medium text-[#07074D]"> 성함 </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="이름을 입력해 주세요."
                        class="w-full rounded-md border border-[#e0e0e0] bg-white 2xl:py-3 py-2 2xl:px-6 px-3 text-base font-medium text-[#1c1d1c] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5"  data-aos="fade-up">
                    <label for="email" class="mb-3 block text-base font-medium text-[#07074D]"> 이메일 </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white 2xl:py-3 py-2 2xl:px-6 px-3 text-base font-medium text-[#1c1d1c] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5"  data-aos="fade-up">
                    <label for="message" class="mb-3 block text-base font-medium text-[#07074D]">내용</label>
                    <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="내용을 입력해 주세요"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white 2xl:py-3 py-2 2xl:px-6 px-3 text-base font-medium text-[#1c1d1c] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>
                <div  data-aos="fade-up">
                    <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] 2xl:py-3 py-2 2xl:px-6 px-4 text-base font-semibold text-white outline-none"
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

::v-deep(.swiper-button-next),
::v-deep(.swiper-button-prev) {
    color: #fff;
}
::v-deep(.swiper-button-next:hover),
::v-deep(.swiper-button-prev:hover) {
	color: #fefce8;
}

::v-deep(.swiper-button-next:after),
::v-deep(.swiper-button-prev:after) {
    font-size: 2.5rem;
}
::v-deep(.swiper-button-next) {
    right:1.25rem;
}
::v-deep(.swiper-button-prev) {
    left: 1.25rem;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.swiper-slide-active .fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

@media (min-width: 1536px){
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
}
@media (max-width: 1024px) {
	::v-deep(.swiper-button-next),
	::v-deep(.swiper-button-prev){display: none;}
}

</style>
