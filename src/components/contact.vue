<template>
  <v-container class="py-md-16 mx-md-13 mb-16">
    <v-col class="text-h4 text-center text-md-left pb-16">
      {{ $t("talk") }}
    </v-col>
    <v-container class="text-center">
      <v-row>
        <v-col cols="12" class="col-sm-4">
          <v-card shaped outlined color="main" dark class="pa-5">
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

              <v-tooltip v-model="show" bottom>
                <template v-slot:activator="{ attrs }">
                  <v-btn
                          :disabled="!valid"
                          @click="sendMail"
                          color="rose"
                          dark
                          v-bind="attrs"
                  >{{ $t("send") }}
                  </v-btn
                  >
                </template>
                <v-col>
                  <span> {{ $t("sent") }} </span>
                </v-col>
              </v-tooltip>
            </v-form>
          </v-card>
        </v-col>
        <v-spacer class="hidden-sm-and-up"/>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
	import {messagesCollection} from "../firebase/";

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
				return (
					[(v) => !!v || message], [(v) => /.+@.+\..+/.test(v) || message2]
				);
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
