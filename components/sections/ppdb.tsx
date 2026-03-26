'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2 } from 'lucide-react';

export default function PPDB() {
  const [formData, setFormData] = useState({
    namaSiswa: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    namaWali: '',
    nomorHP: '',
    alamat: '',
    asalSekolah: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validasi form
    if (!formData.namaSiswa || !formData.tanggalLahir || !formData.jenisKelamin || !formData.nomorHP) {
      alert('Mohon isi semua field yang wajib');
      return;
    }

    // Simulate form submission
    console.log('Form data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        namaSiswa: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: '',
        namaWali: '',
        nomorHP: '',
        alamat: '',
        asalSekolah: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="ppdb" className="w-full py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Pendaftaran Siswa Baru
          </h2>
          <p className="text-muted-foreground text-lg">
            Daftarkan putra/putri Anda untuk menjadi bagian dari keluarga besar SD Negeri 050577
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-primary/20">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-primary">Proses Mudah</h3>
            </div>
            <p className="text-sm text-muted-foreground">Pendaftaran online yang sederhana dan cepat</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-accent/20">
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-primary">Gratis</h3>
            </div>
            <p className="text-sm text-muted-foreground">Tanpa biaya pendaftaran apapun</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-secondary/20">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-primary">Terpercaya</h3>
            </div>
            <p className="text-sm text-muted-foreground">Data anda aman bersama kami</p>
          </Card>
        </div>

        <Card className="p-8 bg-card border-0 shadow-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="namaSiswa" className="text-primary font-semibold">
                    Nama Lengkap Siswa *
                  </Label>
                  <Input
                    id="namaSiswa"
                    name="namaSiswa"
                    value={formData.namaSiswa}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap siswa"
                    className="border-2 border-border focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tempatLahir" className="text-primary font-semibold">
                    Tempat Lahir
                  </Label>
                  <Input
                    id="tempatLahir"
                    name="tempatLahir"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    placeholder="Masukkan tempat lahir"
                    className="border-2 border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tanggalLahir" className="text-primary font-semibold">
                    Tanggal Lahir *
                  </Label>
                  <Input
                    id="tanggalLahir"
                    name="tanggalLahir"
                    type="date"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    className="border-2 border-border focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jenisKelamin" className="text-primary font-semibold">
                    Jenis Kelamin *
                  </Label>
                  <Select value={formData.jenisKelamin} onValueChange={(value) => handleSelectChange('jenisKelamin', value)}>
                    <SelectTrigger className="border-2 border-border focus:border-primary">
                      <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="laki-laki">Laki-laki</SelectItem>
                      <SelectItem value="perempuan">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="namaWali" className="text-primary font-semibold">
                    Nama Orang Tua / Wali
                  </Label>
                  <Input
                    id="namaWali"
                    name="namaWali"
                    value={formData.namaWali}
                    onChange={handleChange}
                    placeholder="Masukkan nama orang tua/wali"
                    className="border-2 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nomorHP" className="text-primary font-semibold">
                    Nomor HP Orang Tua *
                  </Label>
                  <Input
                    id="nomorHP"
                    name="nomorHP"
                    type="tel"
                    value={formData.nomorHP}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className="border-2 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="space-y-2">
                <Label htmlFor="alamat" className="text-primary font-semibold">
                  Alamat Rumah
                </Label>
                <Textarea
                  id="alamat"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  placeholder="Masukkan alamat rumah lengkap"
                  className="border-2 border-border focus:border-primary min-h-24"
                />
              </div>

              {/* Row 5 */}
              <div className="space-y-2">
                <Label htmlFor="asalSekolah" className="text-primary font-semibold">
                  Asal Sekolah / TK
                </Label>
                <Input
                  id="asalSekolah"
                  name="asalSekolah"
                  value={formData.asalSekolah}
                  onChange={handleChange}
                  placeholder="Masukkan nama sekolah/TK asal"
                  className="border-2 border-border focus:border-primary"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
              >
                Kirim Pendaftaran
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Bidang wajib diisi
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20">
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Pendaftaran Berhasil!
              </h3>
              <p className="text-muted-foreground mb-6">
                Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda.
              </p>
              <p className="text-sm text-muted-foreground">
                Mohon tunggu beberapa saat...
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
