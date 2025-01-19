import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamilyPersonService } from '../../services/family-person.service';
import { FamilyPerson } from '../../models/familyPerson';
import { Role } from '../../models/role';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-family-person',
  templateUrl: './family-person.component.html',
  styleUrls: ['./family-person.component.css'],
  standalone: false,
})
export class FamilyPersonComponent implements OnInit {
  familyPersons:FamilyPerson[]
  roles:Role[]

  // 1) Kişi ekleme formu
  personForm!: FormGroup;

  // 2) Fotoğraf yükleme için input
  selectedFile: File | null = null;

  // Oluşturulan kullanıcının ID’si
  createdPersonId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private familyPersonService: FamilyPersonService,
    private roleService:RoleService
  ) {}

  ngOnInit(): void {
    this.getFamilyPersons()
    this.getRoles()
    this.initializePersonForm();
  }

  /**
   * Kişi ekleme (fotoğrafsız) formunu oluşturma
   */
  initializePersonForm() {
    this.personForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roleId: [0, Validators.required]
    });
  }

  /**
   * Kişi ekleme formu submit
   */
  onPersonFormSubmit() {
    if (this.personForm.valid) {
      // Form değerlerini al
      const personData: FamilyPerson = {
        id: 0,  // Yeni eklenen kişi
        fullName: this.personForm.value.fullName,
        email: this.personForm.value.email,
        password: this.personForm.value.password,
        profilePicture: '', // başlangıçta boş
        roleId: this.personForm.value.roleId
      };

      // API çağrısı: kişi ekle
      this.familyPersonService.addFamilyPerson(personData).subscribe({
        next: (createdPerson) => {
          console.log('Kişi eklendi:', createdPerson);
          // Yeni oluşturulan kaydın Id'sini saklıyoruz
          this.createdPersonId = createdPerson.id;
          alert('Kişi başarıyla eklendi. Eğer fotoğraf eklemek isterseniz aşağıdan yükleyebilirsiniz.');
        },
        error: (err) => {
          console.error('Kişi ekleme hatası:', err);
          alert('Kişi eklerken hata oluştu!');
        }
      });
    } else {
      alert('Lütfen tüm gerekli alanları doldurun.');
    }
  }

 
  getFamilyPersons(){
    this.familyPersonService.getFamilyPersons().subscribe(response=>{
      this.familyPersons=response.data
    })
  }
  getRoles(){
    this.roleService.getRoles().subscribe(response=>{
      this.roles=response.data
    })
  }
  // photoPath(fileName: string): string {
  //   if (!fileName) {
  //     // Eğer fotoğraf yoksa default resim
  //     return 'assets/no-photo.png'; 
  //   }
  //   // Gerçek backend URL’nize göre ayarlayın
  //   return `'https://localhost:7039/api/wwwroot/uploads/profile_pictures/${fileName}`;
  // }
}
