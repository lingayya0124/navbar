<template>
  <vue-navigation-bar :options="navbarOptions" />
</template>

<script>
export default {
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        // brandImage: require("../src/assets/images/lockup-color.png"),
        brandImageAltText: "brand-image",
        collapseButtonOpenColor: "#661c23",
        collapseButtonCloseColor: "#661c23",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        tooltipPlacement: "bottom",
        menuOptionsLeft: [
          {
            type: "link",
            text: "Dashboard",
            path: { name: "pricing" },
            iconLeft: '<i class="fa fa-user-secret" aria-hidden="true"></i>',
          },
          {
            type: "link",
            text: "Home",
            path: { name: "pricing" },
            iconLeft: '<i class="fa  fas fa-home" aria-hidden="true"></i>',
          },
          {
            type: "link",
            text: "Assets",
            path: { name: "pricing" },
            iconLeft: '<i class="fa fas fa-file" aria-hidden="true"></i>',
          },
          {
            type: "link",
            text: "CvesList",
            path: { name: "pricing" },
            iconLeft: '<i class="fa fas fa-list" aria-hidden="true"></i>',
          },
          {
            type: "link",
            text: "Scan Cycle",
            path: { name: "pricing" },
            iconLeft: '<i class="fa fas fa-history" aria-hidden="true"></i>',
          },

          {
            type: "link",
            text: "Admin",
            arrowColor: "#659CC8",
            iconLeft: '<i class="fa fas fa-user" aria-hidden="true"></i>',
            subMenuOptions: [
              {
                isLinkAction: true,
                type: "link",
                text: "Users",

                path: { name: "about" },
                iconLeft: '<i class="fa fa-users"></i>',
              },
              {
                type: "hr",
              },
              {
                type: "link",
                text: "Contacts",
                iconLeft: '<i class=" fa fas fa-phone-alt"></i>',

                path: { name: "locations" },
                arrowColor: "#659CC8",
              },
              {
                type: "hr",
              },
              {
                type: "link",
                text: "Invoice",
                iconLeft:
                  '<i class=" fas fa-file-invoice" aria-hidden="true"></i>',

                path: { name: "blog" },
              },
            ],
          },
          {
            type: "link",
            text: "I am Parham",
            iconLeft: '<i class="fa fa-user"></i>',

            subMenuOptions: [
              {
                type: "link",
                text: "Logout",
                path: { name: "customer-service" },
              },
            ],
          },
        ],
      },
    };
  },
};
</script>



<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");

.vnb {
  background: #00203d;
  color: #ddd;
  .button-red {
    background: #ff3b30;

    &:hover {
      background: darken(#ff3b30, 10%);
    }
  }
}
html {
  width: 100%;
  font-size: 18px;
  color: #fff;
}
body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}
#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}
.code-text {
  background: #010645;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}
@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}
.btn {
  text-transform: uppercase;
  font-weight: bold;
}
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
.main-content-section {
  padding: 45px 0;
  background: #010645;
  min-height: 100%;
}
//
// vue-navigation-bar customization below
//
.main-navbar-section {
  background: #010645;
}
.vnb {
  font-family: "Montserrat", sans-serif;
  @media (min-width: 992px) {
    .button-red {
      background: #ff3b30;
      &:hover {
        background: darken(#ff3b30, 10%);
      }
    }
  }
  &__menu-options {
    &__option {
      &__link {
        color: #ddd;
        &:hover {
          color: #ddd;
        }
      }
      &__button {
        &__icon {
          svg {
            margin-top: -3px;
          }
        }
      }
    }
  }
  &__popup {
    &__bottom {
      &__menu-options {
        &__option {
          &__link {
            &__icon {
              svg {
                margin-top: -4px;
              }
            }
          }
        }
      }
    }
  }
  .custom-section-content {
    width: 100%;
    @media (min-width: 568px) {
      width: 50%;
    }
    @media (min-width: 992px) {
      width: 15%;
    }
    @media (min-width: 1200px) {
      width: 20%;
    }
  }
}
</style>