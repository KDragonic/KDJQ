$(document).ready(function () {
  var methods = {
    init: function (params) {
      var defaults = {
        type: "login",
        tab: "normal",
        id: 0,
        events: {
        },
        forms: {
          login: {
            label: "Вход",
            tabs: {
              sms: {
                show: true,
                label: "СМС",
                css: {
                  style: {
                    default: {
                      "background": "transparent",
                      "transition": "all 0.05s",
                    },
                    hover: {
                      "background": "#A3DFA2"
                    },
                    click: {
                      "background": "#87E785"
                    },
                    class: {
                      active: {
                        "background": "#86C685",
                      }
                    },
                  },

                },
              },
              social: {
                show: true,
                label: "Соц. сети",
                css: {
                  style: {
                    default: {
                      "background": "transparent",
                      "transition": "all 0.05s",
                    },
                    hover: {
                      "background": "#A3DFA2"
                    },
                    click: {
                      "background": "#87E785"
                    },
                    class: {
                      active: {
                        "background": "#86C685",
                      }
                    },
                  },
                },
              },
              normal: {
                show: true,
                label: "Пароль",
                css: {
                  style: {
                    default: {
                      "background": "transparent",
                      "transition": "all 0.05s",
                    },
                    hover: {
                      "background": "#A3DFA2"
                    },
                    click: {
                      "background": "#87E785"
                    },
                    class: {
                      active: {
                        "background": "#86C685",
                      }
                    },
                  },
                },
                сontrols: [
                  {
                    type: "text",
                    options: {
                      label: "Вход",
                      css: {
                        style: {
                          default: {
                            "color": "#000",
                            "font-size": "32px",
                            "text-align": "center",
                            "margin-bottom": "12px",
                          }
                        },
                      },
                    }
                  },

                  {
                    type: "input",
                    options: {
                      code: "login",
                      label: "Логин (Логин, Пароль, Телефон)",
                      type: "text",
                      placeholder: ["johndoe@gmail.com", "sarahsmith@yahoo.com", "michaeldavis@outlook.com", "emilyjones@mail.ru", "alexwilson@yandex.ru"],
                    }
                  },
                  {
                    type: "input",
                    options: {
                      code: "password",
                      label: "Пароль",
                      type: "password",
                      placeholder: "••••••••",
                    }
                  },
                  {
                    type: "text",
                    options: {
                      label: "Забыл пароль",
                      css: {
                        style: {
                          default: {
                            "color": "#333333",
                            "font-size": "16px",
                            "text-decoration-line": "underline",
                            "margin-bottom": "8px",
                            "cursor": "pointer",
                          },
                          hover: {
                            "color": "#4870BF"
                          },
                          click: {
                            "color": "#4081FF"
                          }
                        },
                      },
                      events: {
                        click: {
                          type: "form.change",
                          options: {
                            type: "forget_password",
                            tabs: "stage_1",
                          }
                        }
                      }
                    }
                  },
                  {
                    type: "button",
                    options: {
                      label: "Вход",
                      css: {
                        style: {
                          default: {
                            "background": "#86C685",
                            "color": "white",
                            "font-size": "32px",
                            "margin-bottom": "8px",
                          },
                          hover: {
                            "background": "#66BB65",
                          },
                          click: {
                            "background": "#AED4AE",
                          }
                        }
                      },
                      events: {
                        click: {
                          type: "valid",
                          options: {
                            values: [
                              {
                                code: "login",
                                valids: {
                                  len: {
                                    min: 1,
                                    max: 50,
                                  }
                                }
                              },
                              {
                                code: "password",
                                valids: {
                                  len: {
                                    min: 1,
                                    max: 50,
                                  }
                                }
                              }
                            ],
                            success: {
                              type: "ajax",
                              options: {
                                method: "POST",
                                url: "/api/auth/test/",
                                values: {
                                  login: {
                                    code: "login"
                                  },
                                  password: {
                                    code: "password"
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    type: "text",
                    options: {
                      label: "Регистрация",
                      css: {
                        style: {
                          default: {
                            "color": "#333333",
                            "font-size": "16px",
                            "text-align": "center",
                            "cursor": "pointer",
                          },
                          hover: {
                            "color": "#4870BF"
                          },
                          click: {
                            "color": "#4081FF"
                          }
                        },
                      }
                    }
                  },
                ]
              },
            }
          },
          forget_password: {
            label: "Востановления пароля",
            tabs: {
              stage_1: {
                show: false,
                label: "",
                сontrols: [],
              }
            }
          },
          custom: {
            tabs: {
              message: {
                show: true,
                code: "title",
                label: "Заголовок таба",
                css: {
                  style: {
                    default: {
                      "background": "transparent",
                      "transition": "all 0.05s",
                    },
                    hover: {
                      "background": "#af9eff"
                    },
                    click: {
                      "background": "#5d60ff"
                    },
                    class: {
                      active: {
                        "background": "#2264ff",
                      }
                    },
                  },
                },
                сontrols: [
                  {
                    type: "text",
                    code: "title",
                    options: {
                      css: {
                        style: {
                          default: {
                            "color": "#000",
                            "font-size": "32px",
                            "text-align": "center",
                            "margin-bottom": "12px",
                          }
                        },
                      },
                    }
                  },
                  {
                    type: "text",
                    code: "text",
                    options: {
                      css: {
                        style: {
                          default: {
                            "color": "#333333",
                            "font-size": "20px",
                            "text-align": "center",
                          },
                          hover: {
                            "color": "#4870BF"
                          },
                          click: {
                            "color": "#4081FF"
                          }
                        },
                      }
                    }
                  },
                ]
              },
            }
          }
        },
        values: {
          "phone": "",
          "code": "",
          "login": "",
          "password": "",
          "repeat_password": "",
          "fio": "",
          "email": "",
        }
      };


      var options = $.extend({}, defaults, params);
      const $upform = this
      const $tabs = $(`<div class="tabs"></div>`)
      const $content = $(`<div class="content"></div>`)

      if (!$upform.data('upform')) {
        options.id = Math.random().toString(36).substring(15)
        $upform.data('upform', options);


        // Основной каркас формы
        $upform.append($tabs, $content)

        $upform.addClass("upform show")

        //hover
        $tabs.on("mouseenter", '.item', function () {
          let type_key = $(this).data("type")
          let tab_key = $(this).data("tab")
          let tab_obj = options.forms[type_key].tabs[tab_key]

          if (tab_obj.css?.style?.hover) {
            $(this).css(tab_obj.css?.style?.hover)
          }
        })
        // Кликнул и не отпрустил
        $tabs.on("mousedown", '.item', function () {
          let type_key = $(this).data("type")
          let tab_key = $(this).data("tab")
          let tab_obj = options.forms[type_key].tabs[tab_key]

          if (tab_obj.css?.style?.click) {
            $(this).css(tab_obj.css?.style?.click)
          }
        })

        // Кликнул и отпустил
        $tabs.on("click", '.item', function () {
          let type_key = $(this).data("type")
          let tab_key = $(this).data("tab")

          options.type = type_key
          options.tab = tab_key
          $upform.data('upform', options);
          $upform.upform('render')
        })

        //Выход за пределы
        $tabs.on("mouseleave", '.item', function () {
          let type_key = $(this).data("type")
          let tab_key = $(this).data("tab")
          let tab_obj = options.forms[type_key].tabs[tab_key]

          if ($(this).hasClass("active")) {
            if (tab_obj.css?.style?.class?.active) {
              $(this).css(tab_obj.css?.style?.class?.active)
            }
          }
          else {
            if (tab_obj.css?.style?.default) {
              $(this).css(tab_obj.css?.style?.default)
            }
          }
        })

        // ======== Кнопки ======== //

        // Навелся на элемент
        $content.on("mouseenter", '.button', function () {
          let type_key = $(this).data("type")
          let tab_key = $(this).data("tab")
          let сontrol_key = parseInt($(this).data("сontrol_key"))

          let control = options.forms[type_key].tabs[tab_key].сontrols[сontrol_key].options
          let css = control.css

          if (css?.style?.hover) {
            $(this).css(css?.style?.hover)
          }
        })

        // Кликнул и отпустил
        $content.on("click", '.button', function () {
          let type_key = $(this).data("type")
          let tab_key = $(this).data("tab")
          let сontrol_key = parseInt($(this).data("сontrol_key"))

          let control = options.forms[type_key].tabs[tab_key].сontrols[сontrol_key].options
          let events = control.events

          if (events?.click) {
            if (events.click.type == "valid") {
              let valid_result = $upform.upform("event.valid", events.click.options)
              $upform.upform("render.valid", valid_result)
              if (valid_result.valid) {
                if (events.click.options.success.type == "ajax") {
                  $upform.upform("event.ajax", events.click.options.success.options)
                }
              }
            }
          }
        })

        //Выход за пределы
        $content.on("mouseleave", '.button', function () {
          let type_key = $(this).data("type")
          let tab_key = $(this).data("tab")
          let сontrol_key = $(this).data("сontrol_key")

          let control = options.forms[type_key].tabs[tab_key].сontrols[сontrol_key].options
          let css = control.css

          if (css.style?.default) {
            $(this).css(css.style?.default)
          }
        })


        // ======== Inputs ======== //

        // Изменения input
        $content.on("change keyup keydown", '.input', function () {
          let label = $(this).parents(".label")
          let type_key = $(label).data("type")
          let tab_key = $(label).data("tab")
          let сontrol_key = $(label).data("сontrol_key")

          let control = options.forms[type_key].tabs[tab_key].сontrols[сontrol_key].options
          let code = control.code

          let value = $(this).val()
          $(this).val(value)

          options.values[code] = value

          console.log(value)

          $upform.data('upform', options);
        })






      }
      return $upform;
    },
    "render": function () {
      $(this).upform("render.header")
      $(this).upform("render.body")
    },
    "render.header": function () {
      const $upform = this
      let opt = $(this).data('upform');

      const $tabs = $(this).find(".tabs")
      $tabs.empty();


      let type_obj = opt.forms[opt.type]

      for (tab_key in type_obj.tabs) {
        let tab_obj = type_obj.tabs[tab_key]
        let style = tab_obj.css?.style

        let $el = $(`<div class="item">${tab_obj.label}</div>`)
        if (opt.tab == tab_key)
          $el.addClass("active")

        $el.data("type", opt.type).data("tab", tab_key)


        // Стили табов
        if (style) {
          if (style?.default) {
            $el.css(style?.default)
          }
          if (style?.class) {
            for (style_key in style?.class) {
              if ($el.hasClass(style_key)) {
                let style_class = style.class?.[style_key]
                if (style_class) {
                  $el.css(style_class)
                }
              }
            }
          }
        }

        $tabs.append($el)
      }


    },
    "render.body": function () {
      const $upform = this
      let opt = $(this).data('upform');

      const $content = $(this).find(".content")
      $content.empty();

      let сontrols = opt.forms[opt.type].tabs[opt.tab].сontrols
      for (сontrol_key in сontrols) {
        let control = сontrols[сontrol_key]
        let options = control.options
        let css = options.css?.style?.default
        let $el = null

        if (control.type == "text") {
          $el = $(`<span>${options.label}</span>`)
          $el.data("type", opt.type).data("tab", tab_key).data("сontrol_key", сontrol_key)
          if (css) $el.css(css)
        }


        if (control.type == "button") {
          $el = $(`<button class="button">${options.label}</button>`)
          $el.data("type", opt.type).data("tab", tab_key).data("сontrol_key", сontrol_key)
          if (css) $el.css(css)
        }

        if (control.type == "input") {
          placeholder = ""
          if (Array.isArray(options.placeholder)) {
            placeholder = options.placeholder[Math.floor(Math.random() * options.placeholder.length)]
          }
          else {
            placeholder = options.placeholder
          }

          $el = $(`
            <label class="label" code="${options.code}">
              <span>
                ${options.label}
              </span>
              <input type="${options.type}"
                class="input"
                placeholder="${placeholder}">
              </input>
            </label>
            `
          )
          $el.data("type", opt.type).data("tab", tab_key).data("сontrol_key", сontrol_key)
          if (css) $el.css(css)
        }


        if ($el)
          $content.append($el)
      }

    },
    "render.valid": function (valids) {
      let opt = $(this).data('upform');

      for (const code in valids.values) {
        let obj = valids.values[code]
        let $label = $(this).find(`.label[code="${code}"]`)
        $label.find("span.error").remove() //Удалить прошлые ошибки
        if (obj.valid) {
          $label.removeClass("error").addClass("success")
        }
        else {
          $label.removeClass("success").addClass("error")
          for (const error of obj.errors) {
            $label.append(`<span class="error">${error}</span>`)
          }
        }
      }
    },
    "event.valid": function (event) {
      let opt = $(this).data('upform');

      let result = {
        "values": {},
        "valid": true
      }
      for (obj of event.values) {
        let rules = obj.valids
        let value = opt.values[obj.code]

        let valid = true
        let errors = []

        if (rules?.len) {
          if (rules?.len?.min && value.length < rules?.len?.min) {
            errors.push(`Количество символов не может быть меньше ${rules?.len?.min}`)
            valid = false
            result["valid"] = false
          }
          if (rules?.len?.max && value.length > rules?.len?.max) {
            errors.push(`Количество символов не может быть больше ${rules?.len?.max}`)
            valid = false
            result["valid"] = false
          }
        }


        result["values"][obj.code] = {
          "valid": valid,
          "errors": errors,
        }
      }

      return result
    },
    "event.ajax": function (event) {
      let opt = $(this).data('upform');
      let $upform = this

      let param = {}

      for (const key in event.values) {
        const value = event.values[key];
        if (value?.code) {
          param[key] = opt.values[key]
        }
      }


      if (event.method == "POST") {
        $.ajax({
          type: event.method,
          url: event.url,
          data: param,
          beforeSend: function (request) {
            request.setRequestHeader('X-CSRFToken', getCookie('csrftoken'))
          },
          success: function (response) {
            let upform = response?.upform
            let tpye = upform.type
            if (tpye.indexOf("form.custom") > -1)
              $($upform).upform("render.form.custom", upform)
          }
        });
      }
      else {
        $.ajax({
          type: event.method,
          url: event.url,
          data: param,
          success: function (response) {
            console.log(response)
          }
        });
      }
    },
    "render.form.custom": function (custom_options) {
      let opt = $(this).data('upform');

      const $content = $(this).find(".content")
      $content.empty();

      if (custom_options.type == "form.custom.message") {
        let сontrols = opt.forms.custom.tabs.message.сontrols
        for (сontrol_key in сontrols) {
          let control = сontrols[сontrol_key]
          let options = control.options
          let css = options.css?.style?.default
          let $el = null

          let custom_options_сontrols_keys = Object.keys(custom_options.сontrols)

          if (custom_options_сontrols_keys.includes(control.code)) {
            let label = custom_options.сontrols[control.code].label

            if (control.type == "text") {
              $el = $(`<span>${label}</span>`)
              $el.data("type", opt.type).data("tab", tab_key).data("сontrol_key", сontrol_key)
              if (css) $el.css(css)

            }

            if ($el)
              $content.append($el)
          }
        }
      }
      opt.type = "custom"
      opt.tab = custom_options.type
      $(this).data('upform', opt);
    }
  }


  $.fn.upform = function (method) {
    if (methods[method]) { return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) }
    else if (typeof method === 'object' || !method) { return methods.init.apply(this, arguments) }
    else { $.error('Метод "' + method + '" в плагине не найден') }
  };
})
