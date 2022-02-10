<template>
  <div class="py-14">
    <v-col class="text-h4 text-center text-md-left pb-16">
      {{ $t("talk") }}
    </v-col>
    <v-container class="text-center">
      <v-row>
        <v-col cols="12" md="6">
          <v-card shaped outlined color="main" dark class="pa-5">
            <v-form ref="contactForm" v-model="valid">
              {{ $t("mail") }}
              <v-text-field
                v-model="mail"
                :rules="mailRules($t('mailRule'), $t('mailRule2'))"
                required
                outlined
                color="action"
              />

              {{ $t("message") }}
              <v-textarea
                v-model="message"
                :rules="messageRules($t('messageRule'))"
                outlined
                color="action"
              />

              <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ attrs }">
                  <v-btn
                    :disabled="!valid"
                    @click="sendMail"
                    color="action"
                    dark
                    v-bind="attrs"
                    >{{ $t("send") }}
                  </v-btn>
                </template>
                <v-col>
                  <span> {{ $t("sent") }} </span>
                </v-col>
              </v-tooltip>
            </v-form>
          </v-card>
        </v-col>
        <v-spacer class="hidden-sm-and-up" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { messagesCollection } from "../firebase/";

export default {
  data() {
    return {
      valid: false,
      show: false,
      mail: "",
      message: "",
    };
  },
  methods: {
    mailRules(message, message2) {
      return [(v) => !!v || message], [(v) => /.+@.+\..+/.test(v) || message2];
    },
    messageRules(message) {
      return [(v) => !!v || message];
    },
    sendMail() {
      if (this.$refs.contactForm.validate()) {
        messagesCollection
          .add({
            mail: this.mail,
            message: this.message,
          })
          .then(() => {
            this.show = true;
            this.$refs.contactForm.reset();
          });
      }
    },
  },
};
</script>
