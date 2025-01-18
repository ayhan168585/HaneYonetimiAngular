import { Component, OnInit } from '@angular/core';
import { FamilyPersonService } from '../../services/family-person.service';
import { ToastrService } from 'ngx-toastr';
import { FamilyPerson } from '../../models/familyPerson';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-profile-picture',
  templateUrl: './upload-profile-picture.component.html',
  standalone: false,
})
export class UploadProfilePictureComponent implements OnInit {
  familyPersonId: number | null = null; // Kullanıcı ID'si
  selectedFile: File | null = null; // Seçilen fotoğraf
  familyPersons:FamilyPerson[]
  photoForm!: FormGroup;

  constructor(
    private familyPersonService: FamilyPersonService,
    private toastrService: ToastrService,
    private fb:FormBuilder
  ) {}
  ngOnInit(): void {
    this.getFamilyPersons()
    this.initializeForm()
  }

  initializeForm(): void {
    this.photoForm = this.fb.group({
      // Kişi seçimi
      selectedPersonId: [null, Validators.required],
      // Fotoğraf input - reaktif form kontrol olmadan da handle edebilirsiniz; 
      // ama input type="file" reaktif formla da çalışabilir.
    });
  }

  /**
   * Dosya seçildiğinde tetiklenir
   */
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  getFamilyPersons() {
    this.familyPersonService.getFamilyPersons().subscribe((response) => {
      this.familyPersons=response.data
    });
  }

  /**
   * Form submit
   */
  onSubmit(): void {
    if (this.photoForm.invalid) {
      alert('Lütfen bir kişi seçiniz ve fotoğraf ekleyiniz.');
      return;
    }

    if (!this.selectedFile) {
      alert('Fotoğraf seçilmedi.');
      return;
    }

    const familyPersonId = this.photoForm.value.selectedPersonId;

    this.familyPersonService.uploadProfilePicture(familyPersonId, this.selectedFile).subscribe({
      next: (res) => {
        console.log('Fotoğraf yüklendi:', res);
        this.toastrService.success("Kişiye profil resmi eklendi")
      },
      error: (err) => {
        console.error('Fotoğraf yükleme hatası:', err);
        this.toastrService.success("Kişiye profil resmi eklendi")
      }
    });
  }
}
