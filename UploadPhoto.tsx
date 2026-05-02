import { Link } from "react-router";
import { ArrowLeft, Camera, Upload, Image, CheckCircle } from "lucide-react";
import { useState } from "react";
import PharmlyLogo from "../PharmlyLogo";

export default function UploadPhoto() {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success">("idle");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadStatus("uploading");
      setTimeout(() => {
        setUploadStatus("success");
      }, 1500);
    }
  };

  return (
    <div className="min-h-full bg-[#fafbfc]">
      <div className="bg-white px-6 pt-10 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/add" className="p-2 -ml-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-[#1a1a1a]" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1a1a1a] flex-1">Upload Photo</h1>
        </div>
        <p className="text-gray-600">Take a photo or upload from gallery</p>
      </div>

      <div className="px-6 py-8">
        {uploadStatus === "idle" && (
          <>
            <div className="bg-white rounded-3xl p-8 mb-6 text-center border-2 border-dashed border-gray-200 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00A6A6]/15 to-[#52489C]/15 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Image className="w-12 h-12 text-[#00A6A6]" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">No photo selected</h3>
              <p className="text-sm text-gray-600 mb-6">
                Upload a clear photo of your prescription
              </p>

              <label className="inline-flex items-center justify-center gap-2 bg-[#00A6A6] text-white rounded-3xl py-3.5 px-6 font-semibold cursor-pointer hover:shadow-lg hover:shadow-[#00A6A6]/25 transition-all">
                <Upload className="w-5 h-5" />
                Choose from Gallery
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#fafbfc] text-gray-500">or</span>
              </div>
            </div>

            <label className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-[#1a1a1a] rounded-3xl py-4 px-6 font-semibold cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              <Camera className="w-5 h-5" />
              Take Photo
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </>
        )}

        {uploadStatus === "uploading" && (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 border-4 border-[#00A6A6] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-semibold">Uploading...</p>
          </div>
        )}

        {uploadStatus === "success" && (
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-[#00A6A6]/15 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-[#00A6A6]" />
            </div>
            <h3 className="font-bold text-[#1a1a1a] mb-2">Upload Successful!</h3>
            <p className="text-sm text-gray-600 mb-6">
              Your prescription has been uploaded
            </p>

            <div className="space-y-3">
              <Link
                to="/add"
                className="block w-full bg-[#00A6A6] text-white rounded-3xl py-3.5 px-6 font-semibold hover:shadow-lg hover:shadow-[#00A6A6]/25 transition-all"
              >
                Continue to Add Details
              </Link>

              <button
                onClick={() => setUploadStatus("idle")}
                className="block w-full bg-white border-2 border-gray-200 text-[#1a1a1a] rounded-3xl py-3.5 px-6 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Upload Another
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 bg-gradient-to-br from-[#FFC759]/10 to-[#FF85A3]/10 rounded-3xl p-5 border border-[#FFC759]/20">
          <h4 className="font-bold text-[#1a1a1a] mb-3">Tips for better results:</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#00A6A6] mt-0.5">•</span>
              <span>Ensure good lighting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00A6A6] mt-0.5">•</span>
              <span>Keep the prescription flat</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00A6A6] mt-0.5">•</span>
              <span>Avoid shadows and glare</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00A6A6] mt-0.5">•</span>
              <span>Capture all text clearly</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
