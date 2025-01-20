<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="text-center p-6 bg-white rounded-lg shadow-lg">
        <!-- 텍스트 -->
        <h1 class="text-2xl font-bold text-gray-800 mb-2">페이지 준비 중입니다</h1>
        <p class="text-gray-600 mb-4">
          현재 페이지를 준비 중입니다. 잠시 후 다시 방문해 주세요.
        </p>
        <!-- 버튼 -->
        <button
          @click="goBack"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          메인 페이지로 돌아가기
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
    const goBack = () => {
        window.location.href = '/'; // 메인 페이지로 이동
    };
  </script>
  