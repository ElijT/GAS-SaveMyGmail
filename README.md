# GAS-SaveMyGmail

Save My Gmail is a program written in Google Apps Script ([Apps Script](https://developers.google.com/apps-script/)) that can be used to ackup gmail message and attachements in GDrive.


This application will allow to backup Gmail messages to Gdrive painlessly. You have three main modalities of backup and two ways to trigger backups.

# Modalities
- Backup all Gmail conversations labelled with the 'Noattachements' label (defined in the settings) as PDF in GDrive.
- Backup all Gmail conversations labelled with the 'Attachements' label (defined in the settings) as PDF in GDrive, AND backup all attachements in the same Gdrive folder.
- Backup ONLY Attachements within conversations labelled with the 'Attachements' label (defined in the settings) in GDrive.

# Triggers
- Time defined: The script will run every 5 minutes and process Gmail conversations as they are coming.
- On demand: The script will be run on user request.

The label should be applied to the GMail conversations on top of any other labels that might be present. Once the conversations is processed the "Save My GMail" label is automatically removed. All other label are kept untouched
