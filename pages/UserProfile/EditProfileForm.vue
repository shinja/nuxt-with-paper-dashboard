<template>
  <card class="card" title="Edit Profile">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              v-model="user.company"
              type="text"
              label="Company"
              :disabled="true"
              placeholder="Paper dashboard"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              v-model="user.username"
              type="text"
              label="Username"
              placeholder="Username"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              v-model="user.email"
              type="email"
              label="Username"
              placeholder="Email"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
              v-model="user.firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              v-model="user.lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input
              v-model="user.address"
              type="text"
              label="Address"
              placeholder="Home Address"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              v-model="user.city"
              type="text"
              label="City"
              placeholder="City"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              v-model="user.country"
              type="text"
              label="Country"
              placeholder="Country"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              v-model="user.postalCode"
              type="number"
              label="Postal Code"
              placeholder="ZIP Code"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea
                v-model="user.aboutMe"
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
              >
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            Update Profile
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Paper Dashboard',
        username: 'michael23',
        email: '',
        firstName: 'Chet',
        lastName: 'Faker',
        address: 'Melbourne, Australia',
        city: 'Melbourne',
        postalCode: '',
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    }
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user))
    }
  }
}
</script>
<style></style>
