<template>
  <div class="mybook">
    <div class="align-item-center forComputer">
      <!-- BOOK WRAP -->
      <div class="book-wrap">
        <div class="cover cover-left"></div>
        <!-- BOOK -->
        <div class="book">
          <!-- page 1-->
          <div class="book-page" style="text-align: left">
            <h1>Thông tin</h1>
            <br />
            <div class="page-change">
              <h3>Giới thiệu <span class="time">Trang 2</span></h3>
            </div>
            <br />
            <div class="page-change" @click="pageGo((pageNumber = 3))">
              <h3>
                Học vấn
                <span class="time">Trang 3</span>
              </h3>
            </div>
            <br />
            <div class="page-change" @click="pageGo((pageNumber = 3))">
              <h3>
                Kinh nghiệm
                <span class="time">Trang 3</span>
              </h3>
            </div>
            <br />
            <div class="page-change" @click="pageGo((pageNumber = 4))">
              <h3>
                Kỹ năng
                <span class="time">Trang 4</span>
              </h3>
            </div>
            <br />
            <div class="page-change" @click="pageGo((pageNumber = 5))">
              <h3>
                Dự án phát triển
                <span class="time">Trang 5</span>
              </h3>
            </div>
            <br />
            <div class="page-change" @click="pageGo((pageNumber = 5))">
              <h3>
                Ngoại Ngữ / Chứng chỉ
                <span class="time">Trang 5</span>
              </h3>
            </div>
            <br />
            <div class="page-change" @click="pageGo((pageNumber = 6))">
              <h3>
                Sở thích
                <span class="time">Trang 6</span>
              </h3>
            </div>
            <br />
            <div class="page-change" @click="pageGo((pageNumber = 6))">
              <h3>
                Khác ...
                <span class="time">Trang 6</span>
              </h3>
            </div>
            <!-- turn page action -->
            <div class="page-db" style="text-align: center">1</div>
          </div>
          <!-- end page 1-->
          <!-- PAGE 6 -->
          <div class="book-page page-right turn">
            <!-- page 6 -->
            <div class="page-front">
              <div class="wrap-content">
                <h1>Sở thích</h1>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Sở thích ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.interests['1'].main"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.interests['1'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.interests['1'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Sở thích ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.interests['2'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.interests['2'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.interests['2'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Sở thích ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.interests['3'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.interests['3'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.interests['3'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <h1>Khác</h1>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.others['1'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.others['1'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.others['1'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder=" ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.others['2'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.others['2'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.others['2'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder=" ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.others['3'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.others['3'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian nhận..."
                    v-model="book.others['3'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <div class="page">6</div>
              </div>
            </div>
          </div>
          <!-- END PAGE 6 -->
          <!-- PAGE 4 + 5 -->
          <div class="book-page page-right turn" id="page-5-6">
            <!-- page 4 -->
            <div class="page-front">
              <div class="wrap-content">
                <h1>Kỹ năng</h1>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Kỹ năng..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.skill['1'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['1'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['1'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Kỹ năng..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.skill['2'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['2'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['2'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Kỹ năng..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.skill['3'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['3'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['3'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Kỹ năng..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.skill['4'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['4'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['4'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Kỹ năng..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.skill['5'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['5'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['5'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Kỹ năng..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.skill['6'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['6'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.skill['6'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>

                <div class="page">4</div>
                <div
                  class="page-change page-change-bottom align-item-center"
                  data-page="page-5-6"
                  @click="pageIncrease"
                >
                  Next <i class="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <!-- page 5 -->
            <div class="page-back">
              <div class="wrap-content">
                <h1>Dụ án phát triển</h1>
                <br />
                <div class="wrap-input">
                  <a
                    v-if="!editStatus"
                    v-bind:href="`https://${book.project['1'].support}`"
                    target="_blank"
                  >
                    <input
                      type="text"
                      placeholder="Dụ án..."
                      class="input-setup main bc-none"
                      v-bind:class="{ 'show-placeholder': editStatus }"
                      v-model="book.project['1'].main"
                      :disabled="editStatus ? disabled : ''"
                    />
                  </a>
                  <input
                    type="text"
                    placeholder="Dụ án..."
                    v-if="editStatus"
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.project['1'].main"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Link..."
                    v-model="book.project['1'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.project['1'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <a
                    v-if="!editStatus"
                    v-bind:href="`https://${book.project['1'].support}`"
                    target="_blank"
                  >
                    <input
                      type="text"
                      placeholder="Dụ án..."
                      class="input-setup main bc-none"
                      v-bind:class="{ 'show-placeholder': editStatus }"
                      v-model="book.project['2'].main"
                      :disabled="editStatus ? disabled : ''"
                    />
                  </a>
                  <input
                    type="text"
                    placeholder="Dụ án..."
                    v-if="editStatus"
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.project['2'].main"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Link..."
                    v-model="book.project['2'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.project['2'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <a
                    v-if="!editStatus"
                    v-bind:href="`https://${book.project['3'].support}`"
                    target="_blank"
                  >
                    <input
                      type="text"
                      placeholder="Dụ án..."
                      class="input-setup main bc-none"
                      v-bind:class="{ 'show-placeholder': editStatus }"
                      v-model="book.project['3'].main"
                      :disabled="editStatus ? disabled : ''"
                    />
                  </a>
                  <input
                    type="text"
                    placeholder="Dụ án..."
                    v-if="editStatus"
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.project['3'].main"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Link..."
                    v-model="book.project['3'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.project['3'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <h1>Ngoại ngữ/ chứng chỉ</h1>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Ngoại ngữ/ chứng chỉ ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.language['1'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.language['1'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian nhận..."
                    v-model="book.language['1'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Ngoại ngữ/ chứng chỉ ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.language['2'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.language['2'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian nhận..."
                    v-model="book.language['2'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Ngoại ngữ/ chứng chỉ ..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.language['3'].main"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Mô tả..."
                    v-model="book.language['3'].support"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian nhận..."
                    v-model="book.language['3'].note"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>

                <div class="page">5</div>
                <div
                  class="page-change page-change-bottom back align-item-center"
                  data-page="page-5-6"
                  @click="pageReduction"
                >
                  <i class="fas fa-arrow-left"></i> Back
                </div>
              </div>
            </div>
          </div>
          <!-- END PAGE 4 + 5 -->
          <!-- PAGE 2 + 3 -->
          <div class="book-page page-right turn" id="page-3-4">
            <!-- page 2 -->
            <div class="page-front flex-top">
              <div class="wrap-content">
                <div class="text-center">
                  <input
                    type="file"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-if="editStatus"
                    placeholder="Chức vị..."
                    :disabled="editStatus ? disabled : ''"
                  />
                  <div
                    class="bg-img avt"
                    style="background-image: url(assets/images/favion.png)"
                  ></div>
                  <br />

                  <input
                    type="text"
                    v-bind:placeholder="currentUser.username"
                    class="input-setup main bc-none name"
                    v-bind:class="{ 'show-placeholder': true }"
                    v-model="book.name"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <br />
                  <div class="social-list">
                    <div class="social-list-item">
                      <a
                        v-bind:href="`https://www.${book.facebook}`"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f fb"></i>
                      </a>
                      <input
                        type="text"
                        v-bind:class="{ 'd-block': editStatus }"
                        placeholder="Facebook..."
                        v-model="book.facebook"
                        :disabled="editStatus ? disabled : ''"
                      />
                    </div>
                    <div class="social-list-item">
                      <i class="fas fa-envelope ytb"></i>
                      <input
                        type="text"
                        v-bind:class="{ 'd-block': editStatus }"
                        placeholder="Email..."
                        v-model="book.email"
                        :disabled="editStatus ? disabled : ''"
                      />
                    </div>
                    <div class="social-list-item">
                      <a
                        v-bind:href="`https://www.${book.git}`"
                        target="_blank"
                      >
                        <i class="fab fa-github git"></i>
                      </a>
                      <input
                        type="text"
                        v-bind:class="{ 'd-block': editStatus }"
                        placeholder="Git..."
                        v-model="book.git"
                        :disabled="editStatus ? disabled : ''"
                      />
                    </div>
                  </div>
                  <br />
                  <textarea
                    placeholder="Write something.."
                    class="introduce width-s100 input-setup bc-none height-s2 blue-color"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.introduce"
                    :disabled="editStatus ? disabled : ''"
                  ></textarea>
                  <div class="page">2</div>
                  <div
                    class="page-change page-change-bottom align-item-center page-change-bottom"
                    data-page="page-3-4"
                    @click="pageIncrease"
                  >
                    View my projects <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- end page 2 -->
            <!-- page 3 -->
            <!-- now -->
            <div class="page-back">
              <div class="wrap-content">
                <h1>Trình độ học vấn</h1>
                <br />
                <h3>
                  <input
                    type="text"
                    class="input-setup h2 bc-none"
                    placeholder="Trường đại học..."
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.education.name"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <div class="d-flex">
                    <p style="padding-right: 2px">Ngành</p>
                    <p>học:</p>
                    <input
                      type="text"
                      placeholder="Ngành học..."
                      class="input-setup bc-none black-color"
                      v-bind:class="{ 'show-placeholder': editStatus }"
                      v-model="book.education.majors"
                      :disabled="editStatus ? disabled : ''"
                    />
                  </div>
                  <input
                    type="text"
                    class="input-setup bc-none time black-color"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.education.time"
                    placeholder="Thời gian học..."
                    :disabled="editStatus ? disabled : ''"
                  />
                </h3>
                <br />
                <br />
                <br />
                <h1>Kinh nghiệm làm việc</h1>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Nơi làm việc..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.experiences['1'].company"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Chức vị..."
                    v-model="book.experiences['1'].position"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian làm việc..."
                    v-model="book.experiences['1'].time"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Nơi làm việc..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.experiences['2'].company"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Chức vị..."
                    v-model="book.experiences['2'].position"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian làm việc..."
                    v-model="book.experiences['2'].time"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Nơi làm việc..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.experiences['3'].company"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Chức vị..."
                    v-model="book.experiences['3'].position"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian làm việc..."
                    v-model="book.experiences['3'].time"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>
                <br />
                <div class="wrap-input">
                  <input
                    type="text"
                    placeholder="Nơi làm việc..."
                    class="input-setup main bc-none"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    v-model="book.experiences['4'].company"
                    :disabled="editStatus ? disabled : ''"
                  />

                  <input
                    type="text"
                    class="input-setup bc-none support"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Chức vị..."
                    v-model="book.experiences['4'].position"
                    :disabled="editStatus ? disabled : ''"
                  />
                  <input
                    type="text"
                    class="input-setup bc-none black-color note"
                    v-bind:class="{ 'show-placeholder': editStatus }"
                    placeholder="Thời gian làm việc..."
                    v-model="book.experiences['4'].time"
                    :disabled="editStatus ? disabled : ''"
                  />
                </div>

                <div class="page">3</div>
                <div
                  class="page-change page-change-bottom back align-item-center"
                  data-page="page-3-4"
                  @click="pageReduction"
                >
                  <i class="fas fa-arrow-left"></i> Back
                </div>
              </div>
            </div>
            <!-- end page 3 -->
          </div>
          <!-- END PAGE 2 + 3 -->
        </div>
        <!-- END BOOK -->
        <div class="cover right"></div>
        <div class="page-status page-status-left">
          <input
            class="input-setup blue-color width-s1 align-item-center"
            v-model="pageNew"
          />
        </div>
        <div class="page-status page-status-center">/</div>
        <div class="page-status page-status-right">{{ pageMax }}</div>
        <div class="page-status page-status-go" @click="pageGo(pageNew)">
          GO
        </div>
        <div class="page-edit d-flex">
          <div v-if="!editStatus" @click="editStatus = !editStatus">
            Chỉnh sửa
          </div>
          <div v-if="editStatus" @click="edit" style="margin-right: 10px">
            Hoàn thành
          </div>
          <div v-if="editStatus" @click="cancle">Hủy</div>
        </div>
      </div>
      <!-- END BOOK WRAP -->
    </div>
  </div>
</template>

<script>
import BookService from '../services/bookService';
import { Education, Experiences, Common } from '../models/forbook';
export default {
  name: 'User',
  //data
  data() {
    return {
      pageNow: 1,
      pageNew: 1,
      pageMax: 6,
      editStatus: false,
      book: {
        name: '',
        email: this.$store.state.auth.user.email,
        git: '',
        facebook: '',
        introduce: '',
        education: new Education('', '', ''),
        experiences: {
          1: new Experiences('', '', ''),
          2: new Experiences('', '', ''),
          3: new Experiences('', '', ''),
          4: new Experiences('', '', '')
        },
        skill: {
          1: new Common('', '', ''),
          2: new Common('', '', ''),
          3: new Common('', '', ''),
          4: new Common('', '', ''),
          5: new Common('', '', ''),
          6: new Common()
        },
        project: {
          1: new Common('', '', ''),
          2: new Common(),
          3: new Common()
        },
        language: {
          1: new Common('', '', ''),
          2: new Common(),
          3: new Common()
        },
        interests: {
          1: new Common(''),
          2: new Common(''),
          3: new Common('')
        },
        others: {
          1: new Common(),
          2: new Common(),
          3: new Common()
        }
      }
    };
  },
  methods: {
    cancle() {
      this.editStatus = !this.editStatus;
      if (this.$store.state.auth.user.book) {
        this.book = this.$store.state.auth.user.book;
      }
    },
    edit() {
      this.$store.state.auth.user.book = this.book;
      BookService.addBook(this.$store.state.auth.user);
      this.editStatus = !this.editStatus;
    },
    pageIncrease() {
      this.pageNow += 2;
      this.pageNew = this.pageNow;
    },
    pageReduction() {
      this.pageNow -= 2;
      this.pageNew = this.pageNow;
    },
    pageGo(pageNumber) {
      let page;
      let pageTurn = [];
      if (pageNumber % 2 == 0) {
        page = pageNumber - 1;
      } else {
        page = pageNumber - 0;
      }
      if (page > this.pageMax || page <= 0 || !Number.isInteger(page)) {
        this.pageNew = this.pageNow;
        return;
      }

      if (page - this.pageNow > 0) {
        for (let i = parseInt(this.pageNow); i < page; ) {
          i = parseInt(i) + 2;
          pageTurn[i] = document.getElementById(`page-${i}-${i + 1}`);
          setTimeout(() => {
            pageTurn[i].classList.add('turn');
            pageTurn[i].style.zIndex = i + 9;
          }, 100 * i);
        }
      } else {
        for (let i = parseInt(this.pageNow); i > page; ) {
          i = parseInt(i) - 2;
          pageTurn[i] = document.getElementById(`page-${i + 2}-${i + 3}`);
          setTimeout(() => {
            pageTurn[i].classList.remove('turn');
            pageTurn[i].style.zIndex = 'unset';
          }, 100 * i);
        }
      }

      this.pageNow = page;
      this.pageNew = page;
    }
  },
  mounted() {
    let turnPageBtn = document.querySelectorAll('.page-change');

    turnPageBtn.forEach((el, index) => {
      el.onclick = () => {
        let pageTurnId = el.getAttribute('data-page');
        if (!pageTurnId) return;
        let pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
          pageTurn.classList.remove('turn');
          setTimeout(() => {
            pageTurn.style.zIndex = 'unset';
          }, 600);
        } else {
          pageTurn.classList.add('turn');
          pageTurn.style.zIndex = 20 - index;
        }
      };
    });

    let cover = document.querySelector('.cover.right');

    let page = document.querySelectorAll('.page-right.turn');

    setTimeout(() => {
      cover.classList.add('turn');
    }, 2100);

    setTimeout(() => {
      cover.style.zIndex = -1;
    }, 2800);

    page.forEach((el, index) => {
      el.style.zIndex = 20 - index;
    });

    page.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove('turn');
        setTimeout(() => {
          el.style.zIndex = 'unset';
        }, 600);
      }, (index + 1) * 200 + 2100);
    });
  },
  computed: {
    disabled() {
      return false;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (this.$store.state.auth.user.book) {
      this.book = this.$store.state.auth.user.book;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Caveat', cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.forMobile {
  display: none !important;
}

@media only screen and (max-width: 1200px) {
  .forComputer {
    font-size: 10px;

    h1 {
      font-size: 2em;
    }

    .time {
      font-size: 0.7em;
    }

    .introduce {
      font-size: 1.2em;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .forComputer {
    font-size: 8px;
    // display: none !important;
  }

  .forMobile {
    display: block !important;
  }
}

.input-setup {
  font-family: 'Caveat', cursive;
  border: none;
  border-radius: 2px;

  &::placeholder {
    color: transparent;
  }
}

.width-s1 {
  width: 16px;
}

.width-s100 {
  width: 100%;
}

.height-s2 {
  height: 300px;
}

.bc-none {
  background-color: transparent;
}

.black-color {
  color: #333333;
}

.show-placeholder {
  &::placeholder {
    color: #333333 !important;
  }
}

.fab {
  font-family: 'Font Awesome 5 Brands' !important;
}

body {
  height: 100vh;
  background-color: #333333;
  overflow: hidden;
}

.align-item-center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

h1 {
  color: #2c3e50;
}

h3,
.h2,
.h3 {
  font-size: 1.3em;
  color: #333333;
}

p {
  font-size: 1.1em;
}

a {
  text-decoration: none;
  color: unset;
}

.white-color {
  color: white;
}

.blue-color {
  color: #2c3e50;
}

.book-wrap {
  height: 45em;
  width: 66em;
  border-radius: 1em;
  padding: 2em;
  position: relative;
  perspective: 250em;
  opacity: 0;
  transform: rotate(-20deg);
  animation: show-up 2s forwards;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #2c3e50;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  transform-origin: 100% 100%;
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: rotateY(0);
}

.cover.turn {
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: rotateY(180deg);
}

.cover-left {
  z-index: -1;
}

.book {
  width: 100%;
  height: 100%;
  display: flex;
  perspective: 250em;
}

.book-page {
  position: relative;
  width: 50%;
  height: 100%;
  padding: 2em;
  display: grid;
  background-color: #f3dfc1;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.2),
    0px 0px 15px rgba(0, 0, 0, 0.1);
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: rotateY(0);
  transform-origin: 0% 0%;
}

.text-center {
  text-align: center;
}

.bg-img {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.avt {
  width: 7em;
  height: 7em;
  border-radius: 2em;
  margin: auto;
}

.name {
  font-size: 3em;
  text-align: center;
  width: 100%;
  color: #333333;
}

.social-list {
  display: flex;
  margin: auto;

  &-item {
    position: relative;

    input {
      display: none;
      position: absolute;
      bottom: -1.5em;
      color: #2c3e50;
      min-width: 5em;
      border: none;
      background-color: transparent;

      left: -2em;
      text-align: left;
    }

    &:first-child {
      margin-left: auto;

      input {
        left: -8em;
      }
    }

    &:last-child {
      margin-right: auto;

      input {
        left: 3.5em;
      }
    }

    &:hover {
      input {
        display: block;
      }
    }
  }
}

.social-list i {
  margin: 0 0.5em;
  font-size: 2em;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.social-list i.fb {
  color: #4267b2;
}

.social-list i.ytb {
  color: #db4437;
}

.social-list i.git {
  color: #000;
}

.social-list i.fb:hover,
.social-list i.git:hover {
  transform: scale(1.3) rotate(30deg);
}

.social-list i.ytb:hover {
  transform: scale(1.3) rotate(-30deg);
}

.introduce {
  font-size: 1.4em;
  text-align: justify;
}

.txt-header {
  color: #2c3e50;
  font-weight: 800;
}

.page-right {
  position: absolute;
  right: 0;
  transform-style: preserve-3d;
}

.page-right.turn {
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: rotateY(-180deg);
}

.page-front,
.page-back {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2em;
  overflow: hidden;
}

.page-front {
  transform: rotateY(0deg) translateZ(1px);
}

.page-back {
  transform: rotateY(180deg) translateZ(1px);
}

.flex-top {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.time {
  text-align: right;
  float: right;
  font-size: 1em;
}

.wrap-content {
  text-align: left;
  position: relative;
  height: 100%;
}

.wrap-input {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .main {
    font-size: 1.3em;
    width: 100%;
    color: #333333;
  }

  .support {
    font-size: 1.1em;
    width: 50%;
    color: #2c3e50;
  }

  .note {
    font-size: 1.1em;
    width: 50%;
    color: #2c3e50;
    text-align: right;
  }
}

.page-change {
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
}

.page-change:hover {
  animation: bounce-left 2s ease infinite;
}

.page-status {
  position: absolute;
  color: white;
  bottom: 0.2em;

  &-left {
    right: 51%;
  }

  &-center {
    right: 49.5%;
  }

  &-right {
    right: 48%;
  }

  &-go {
    right: 43%;
    cursor: pointer;

    &:hover {
      animation: bounce-left 2s ease infinite;
    }
  }
}

.page-edit {
  position: absolute;
  color: white;
  bottom: 0.2em;
  right: 0;
  cursor: pointer;
}

.page {
  position: absolute;
  right: 50%;
  bottom: -1em;
}

.page-db {
  position: absolute;
  right: 50%;
  bottom: 1em;
}

.page-change-bottom {
  position: absolute;
  right: 0;
  bottom: -1em;
}

.page-change i {
  font-size: 0.8em;
  font-family: 'Font Awesome 5 Free';
  position: relative;
  top: 1px;
  margin: 0px 2px;
}

.fas {
  font-family: 'Font Awesome 5 Free';
}

.page-change.back {
  left: 0;
  right: unset;
}

video {
  border-radius: 1em;
  outline: transparent;
  border: none;
}

.ytb-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  width: 3.4em;
  padding: 0.2rem 0.7em;
  background-color: #db4437;
  color: #fff;
  transition: width 0.2s ease-in-out;
  border-radius: 0.5em;
}

.ytb-btn:hover {
  width: 8.5em;
}

.ytb-btn i {
  font-size: 2em;
  margin-right: 0.5em;
}

/* ANIMATION */

@keyframes bounce-left {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes show-up {
  30% {
    opacity: 0;
    transform: rotate(-20deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0);
  }
}
</style>
