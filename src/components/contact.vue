<template>
  <v-container class="py-16 my-16">
    <div class="text-h4 white--text">
      {{ $t("talk") }}
    </div>
    <v-row class="my-10">
      <v-col>
        <v-card color="noir" dark>
          <v-container>
            <v-row>
              <v-spacer cols="3" />
              <v-col cols="6">
                <v-form ref="contactForm" v-model="valid" lazy-validation>
                  {{ $t("mail") }}
                  <v-text-field
                    v-model="mail"
                    :rules="mailRules($t('mailRule'), $t('mailRule2'))"
                    required
                    outlined
                    color="rose"
                  />

                  {{ $t("message") }}
                  <v-textarea
                    v-model="message"
                    :rules="messageRules($t('messageRule'))"
                    outlined
                    color="rose"
                  />

                  <v-btn
                    :disabled="!valid"
                    @click="sendMail"
                    color="rose"
                    dark
                    >{{ $t("send") }}</v-btn
                  >
                </v-form>
              </v-col>
              <v-spacer cols="3" />
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
  import { mailCollection } from "./about.vue";

  export default {
    data() {
      return {
        valid: false,
        mail: "",
        message: "",
      };
    },
    methods: {
      mailRules(message, message2) {
        return (
          [(v) => !!v || message], [(v) => /.+@.+\..+/.test(v) || message2]
        );
      },
      messageRules(message) {
        return [(v) => !!v || message];
      },
      sendMail() {
        if (this.$refs.contactForm.validate()) {
          mailCollection
            .add({
              toUids: ["D9D16fltcfUMPj4PP4nHONXSZvk2"],
              message: {
                subject: "mail de Contact de Lanya",
                html:
                  "<p>Provenant de : " +
                  this.mail +
                  "</p><br> Message : " +
                  this.message,
              },
            })
            .then(() => {
              console.log("Queued email for delivery");
              this.$store.commit("toggleContactDialog");
              this.$store.commit("setSnackbarMessage", "Message envoyé !");
              this.$store.commit("setSnackbarStatus", true);
            });
        }
      },
    },
  };
</script>

<style lang="sass" scoped></style>
