
// Basic Project Configuration
// see  the docs for more info: https://docs.basic.tech

// Project: password-orc
// Link: https://app.basic.tech/project/a2a80610-654d-4770-b18d-d69307d2b67f

export const schema = {
  "project_id": "a2a80610-654d-4770-b18d-d69307d2b67f",
  "tables": {
    "credentials": {
      "type": "collection",
      "fields": {
        "user_id": {
          "type": "string",
          "indexed": true
        },
        "domain_name": {
          "type": "string",
          "indexed": true
        },
        "username": {
          "type": "string",
          "indexed": true
        },
        "password": {
          "type": "string",
          "indexed": true
        },
        "notes": {
          "type": "string",
          "indexed": true
        }
      }
    }
  },
  "version": 1
}
